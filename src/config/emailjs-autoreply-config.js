// Configuration pour l'auto-reply EmailJS

// Dans votre Contact.tsx, vous devez envoyer DEUX emails :
// 1. Email à vous (notification)
// 2. Auto-reply à l'expéditeur (confirmation)

const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setMessage('');

  if (!formData.category) {
    setMessage('Veuillez sélectionner une catégorie');
    setIsLoading(false);
    return;
  }

  try {
    const serviceId = 'service_xxxxx';
    const publicKey = 'xxxxx';
    
    // 1. EMAIL DE NOTIFICATION (à vous)
    const notificationTemplateId = 'template_notification'; // Template existant
    const notificationParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      category: formData.category,
      to_email: 'hugo.nahmiaspro@outlook.com'
    };

    // 2. AUTO-REPLY (à l'expéditeur)
    const autoReplyTemplateId = 'template_autoreply'; // Nouveau template
    const autoReplyParams = {
      from_name: formData.name,        // Pour personnaliser "Bonjour {{from_name}}"
      category: formData.category,     // Pour "concernant {{category}}"
      to_email: formData.email,        // IMPORTANT: envoyer à l'expéditeur
      reply_to: 'hugo.nahmiaspro@outlook.com' // Votre email pour les réponses
    };

    // Envoyer les deux emails
    await Promise.all([
      emailjs.send(serviceId, notificationTemplateId, notificationParams, publicKey),
      emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey)
    ]);

    setMessage('Message envoyé avec succès !');
    setFormData({ name: '', email: '', message: '', category: '' });
    
  } catch (error) {
    console.error('Erreur EmailJS:', error);
    setMessage('Erreur lors de l\'envoi. Veuillez réessayer.');
  } finally {
    setIsLoading(false);
  }
};