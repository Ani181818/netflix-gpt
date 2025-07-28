import { Link } from "react-router-dom";
import { Play, Star, Users, Zap, ArrowRight } from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  MovieGPT
                </span>
              </div>
            </div>

            {/* Login Button */}
            <Link
              to="/login"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Discover Movies with
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get personalized movie recommendations powered by GPT. Find your next favorite film with intelligent search and curated collections.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/login"
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose MovieGPT?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of movie discovery with our AI-powered platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Search</h3>
              <p className="text-gray-300 leading-relaxed">
                Get intelligent movie recommendations based on your preferences using advanced GPT technology.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Curated Collections</h3>
              <p className="text-gray-300 leading-relaxed">
                Explore handpicked collections of top-rated, popular, and upcoming movies from around the world.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Personal Watchlist</h3>
              <p className="text-gray-300 leading-relaxed">
                Save your favorite movies and create personalized watchlists to never miss what you want to watch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-red-400 mb-2">10K+</div>
              <div className="text-gray-300">Movies Available</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">5K+</div>
              <div className="text-gray-300">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              MovieGPT
            </span>
          </div>
          <p className="text-gray-400">
            © 2025 MovieGPT. Discover movies with AI intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;