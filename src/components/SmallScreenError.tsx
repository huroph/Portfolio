const SmallScreenError = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ff4300] to-[#ff9a6c] flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        {/* Logo/Emoji rigolo */}
        <div className="text-8xl mb-6 animate-bounce">
          🖥️💥
        </div>
        
        {/* Message principal */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Oups ! Écran trop petit !
        </h1>
        
        {/* Message drôle */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
          <p className="text-white text-lg mb-3">
            Désolé, mais j'ai besoin d'un peu plus d'espace pour te montrer tout mon talent ! 🎨
          </p>
          <p className="text-white/90 text-base">
            Mon portfolio est optimisé pour les écrans de <strong>768px</strong> et plus.
          </p>
        </div>

        {/* Suggestions */}
        <div className="space-y-3 text-white/80 text-sm">
          <p>💡 <strong>Solutions :</strong></p>
          <div className="space-y-2">
            <p>🖥️ Utilise un ordinateur ou une tablette</p>
            <p>📱 Passe ton téléphone en mode paysage</p>
            <p>🔍 Zoome moins (Ctrl + molette)</p>
          </div>
        </div>

        {/* Contact alternatif */}
        <div className="mt-8 p-4 bg-white/10 rounded-lg">
          <p className="text-white text-sm mb-2">
            En attendant, tu peux me contacter :
          </p>
          <a 
            href="mailto:hugo.nahmiaspro@outlook.com"
            className="inline-block bg-white text-[#ff4300] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            📧 hugo.nahmiaspro@outlook.com
          </a>
        </div>

        {/* Footer rigolo */}
        <div className="mt-6 text-white/60 text-xs">
          <p>PS : Je ne mords pas, promis ! 😄</p>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenError;