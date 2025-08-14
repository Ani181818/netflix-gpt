# MovieGPT 🎬

A modern, AI-powered movie discovery platform built with React, Redux, and OpenAI's GPT technology. Discover your next favorite film with intelligent recommendations and curated collections.

![MovieGPT](https://img.shields.io/badge/MovieGPT-AI%20Powered-red?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?style=for-the-badge&logo=redux)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-green?style=for-the-badge&logo=openai)

## ✨ Features

### 🤖 AI-Powered Search
- **Intelligent Recommendations**: Get personalized movie suggestions using OpenAI's GPT technology
- **Natural Language Queries**: Search for movies using conversational language
- **Smart Results**: AI understands context and provides relevant recommendations

### 🎭 Movie Discovery
- **Now Playing**: Latest movies currently in theaters
- **Top Rated**: Highest-rated films of all time
- **Popular**: Trending movies everyone's talking about
- **Upcoming**: Get excited about future releases
- **Genre Collections**: Curated lists by genre (Horror, Action, etc.)

### 📱 User Experience
- **Responsive Design**: Seamless experience across all devices
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Personal Watchlist**: Save movies to watch later
- **Movie Details**: Comprehensive information with trailers
- **Multi-language Support**: Available in English, Hindi, and Spanish

### 🔐 Authentication
- **Firebase Auth**: Secure user authentication
- **User Profiles**: Personalized experience with profile management
- **Session Management**: Persistent login across sessions

## 🚀 Live Demo

[Visit MovieGPT](https://your-deployed-url.com) *(Update with your actual deployment URL)*

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern UI library
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

### Backend Services
- **Firebase** - Authentication and hosting
- **OpenAI API** - GPT-powered recommendations
- **TMDB API** - Movie data and metadata

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key
- TMDB API key
- Firebase project

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/moviegpt.git
   cd moviegpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   VITE_OPENAI_KEY=your_openai_api_key_here
   VITE_TMDB_KEY=your_tmdb_api_key_here
   ```

4. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password
   - Update `src/utils/firebase.js` with your Firebase config

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 🔑 API Keys Setup

### OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account or sign in
3. Navigate to API Keys section
4. Generate a new API key
5. Add to your `.env` file as `VITE_OPENAI_KEY`

### TMDB API Key
1. Visit [TMDB](https://www.themoviedb.org/)
2. Create an account
3. Go to Settings > API
4. Request an API key
5. Add to your `.env` file as `VITE_TMDB_KEY`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Browse.jsx      # Main browse page
│   ├── GPTSearch.jsx   # AI search interface
│   ├── Header.jsx      # Navigation header
│   ├── Login.jsx       # Authentication
│   ├── MovieCard.jsx   # Movie display card
│   ├── MovieDetail.jsx # Detailed movie view
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useNowPlayingMovies.jsx
│   ├── usePopularMovies.jsx
│   └── ...
├── utils/              # Utilities and configuration
│   ├── appStore.jsx    # Redux store
│   ├── firebase.js     # Firebase config
│   ├── constants.js    # App constants
│   └── ...
└── index.css          # Global styles
```

## 🎯 Usage

### Getting Started
1. **Welcome Page**: Learn about MovieGPT features
2. **Sign Up/Login**: Create an account or sign in
3. **Browse Movies**: Explore curated collections
4. **AI Search**: Use GPT-powered search for recommendations
5. **Watchlist**: Save movies for later viewing

### AI Search Examples
- "Recommend me some sci-fi movies like Blade Runner"
- "I want to watch comedy movies from the 90s"
- "Show me movies similar to The Dark Knight"
- "What are some good romantic movies?"

## 🚀 Deployment

### Firebase Hosting
```bash
# Build the project
npm run build

# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init

# Deploy
firebase deploy
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) for GPT API
- [TMDB](https://www.themoviedb.org/) for movie data
- [Firebase](https://firebase.google.com/) for authentication
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons

## 📞 Support

If you have any questions or need help:

- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/moviegpt/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/moviegpt/discussions)

## 🔮 Roadmap

- [ ] User reviews and ratings
- [ ] Social features (friends, sharing)
- [ ] Advanced filtering options
- [ ] Mobile app development
- [ ] Offline mode support
- [ ] Integration with streaming platforms

---

**Made with ❤️ by [Your Name](https://github.com/yourusername)**

*Discover movies with AI intelligence* 🎬✨