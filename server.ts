import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Contact API Endpoint with optional Gemini AI auto-reply generation
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message, service } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required fields.' });
      }

      console.log(`[Contact Form] Received message from ${name} (${email}): ${subject || 'No Subject'}`);

      let aiReply = '';
      if (process.env.GEMINI_API_KEY) {
        try {
          const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are the AI Assistant for Nitin Kumar Mandal, a Computer Science Engineering student at Symbiosis Institute of Technology (SIT), Pune, and Full Stack Web Developer. 
A recruiter/client named "${name}" (${email}) sent the following message regarding "${subject || service || 'Inquiry'}":
"${message}"

Write a brief, highly professional, warm 2-3 sentence acknowledgment auto-response as Nitin's AI agent thanking them and confirming Nitin will reply personally shortly.`
          });
          aiReply = response.text || '';
        } catch (aiErr) {
          console.warn('[Gemini AI Auto-Reply] Could not generate AI summary:', aiErr);
        }
      }

      res.json({
        success: true,
        message: 'Message sent successfully! Nitin will review and get back to you shortly.',
        aiReply: aiReply || `Thank you, ${name}! Your message has been received. Nitin Kumar Mandal will get back to you at ${email} shortly.`,
        receivedAt: new Date().toISOString()
      });
    } catch (err: any) {
      console.error('[Contact API Error]', err);
      res.status(500).json({ error: 'Failed to process message. Please try again or email directly.' });
    }
  });

  // Proxy GitHub Live Data with Fallback
  app.get('/api/github/:username', async (req, res) => {
    const { username } = req.params;
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`, {
        headers: { 'User-Agent': 'Nitin-Mandal-Portfolio' }
      });

      if (!userRes.ok) {
        throw new Error(`GitHub API returned ${userRes.status}`);
      }

      const userData = await userRes.json();
      
      res.json({
        success: true,
        data: {
          username: userData.login,
          name: userData.name || 'Nitin Kumar Mandal',
          avatarUrl: userData.avatar_url,
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          bio: userData.bio,
          location: userData.location || 'Janakpur, Nepal & Pune, India',
          blog: userData.blog
        }
      });
    } catch (error) {
      // Return realistic fallback data
      res.json({
        success: true,
        fallback: true,
        data: {
          username: username,
          name: 'Nitin Kumar Mandal',
          avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
          publicRepos: 25,
          followers: 142,
          following: 88,
          bio: 'CS Engineering Student @ SIT Pune | Full Stack Web Developer | C++ & React',
          location: 'Pune, India & Janakpur, Nepal'
        }
      });
    }
  });

  // Vite development middleware or static fallback
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Portfolio Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
