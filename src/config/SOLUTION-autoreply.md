# Configuration Auto-Reply EmailJS

## 🚨 Problème identifié

L'auto-reply ne fonctionne pas car vous n'envoyez qu'**un seul email** (la notification vers vous). Il faut envoyer **deux emails** :

1. **Email de notification** → À vous (celui qui marche déjà)
2. **Email d'auto-reply** → À l'expéditeur (celui qui manque)

## ✅ Solution : Double envoi EmailJS

### 1. Créer un nouveau template d'auto-reply

Dans EmailJS, créez un **nouveau template** avec cet ID : `template_autoreply`

**Template settings :**
- **To Email** : `{{to_email}}` (sera l'email de l'expéditeur)
- **From Email** : `hugo.nahmiaspro@outlook.com`
- **Reply To** : `hugo.nahmiaspro@outlook.com`
- **Subject** : `✅ Message bien reçu - Hugo Nahmias`

**Template content :** Utilisez `emailjs-template.html`

### 2. Modifier votre Contact.tsx

Remplacez la fonction `sendEmail` par ceci :

```typescript
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
    const serviceId = 'service_xxxxx';  // Votre service ID
    const publicKey = 'xxxxx';          // Votre public key
    
    // 1. EMAIL DE NOTIFICATION (à vous) - Template existant
    const notificationParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      category: formData.category,
      to_email: 'hugo.nahmiaspro@outlook.com'
    };

    // 2. AUTO-REPLY (à l'expéditeur) - Nouveau template
    const autoReplyParams = {
      from_name: formData.name,           // Pour "Bonjour {{from_name}}"
      category: formData.category,        // Pour "concernant {{category}}"
      to_email: formData.email,           // IMPORTANT: vers l'expéditeur
      reply_to: 'hugo.nahmiaspro@outlook.com'
    };

    // Envoyer les DEUX emails simultanément
    await Promise.all([
      emailjs.send(serviceId, 'template_notification', notificationParams, publicKey),
      emailjs.send(serviceId, 'template_autoreply', autoReplyParams, publicKey)
    ]);

    setMessage(t('message_sent'));
    setFormData({ name: '', email: '', message: '', category: '' });
    
  } catch (error) {
    console.error('Erreur EmailJS:', error);
    setMessage(t('message_error'));
  } finally {
    setIsLoading(false);
  }
};
```

## 🔑 Points clés

### Template d'auto-reply
- **To Email** : `{{to_email}}` (email de l'expéditeur)
- **From Email** : Votre email professionnel
- **Variables** : `{{from_name}}`, `{{category}}`

### Envoi double
- **Premier email** : Notification vers vous (existant)
- **Deuxième email** : Auto-reply vers l'expéditeur (nouveau)

### Test de validation
```javascript
// Test avec vos vraies données
emailjs.send("service_xxxxx", "template_autoreply", {
  from_name: "Test User",
  category: "🌐 Projet Web",
  to_email: "votre-email-test@gmail.com",  // Votre email de test
  reply_to: "hugo.nahmiaspro@outlook.com"
});
```

## 📋 Checklist de résolution

- [ ] Créer le template `template_autoreply` dans EmailJS
- [ ] Configurer `To Email: {{to_email}}`
- [ ] Copier le template HTML d'auto-reply
- [ ] Modifier `Contact.tsx` avec double envoi
- [ ] Tester avec votre email personnel
- [ ] Vérifier la réception de l'auto-reply

## 🎯 Résultat attendu

Quand quelqu'un remplit le formulaire :
1. **Vous recevez** : Notification avec ses infos
2. **Il reçoit** : Auto-reply de confirmation

---

**C'est la solution standard pour les auto-replies avec EmailJS !**