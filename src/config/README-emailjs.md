# Templates EmailJS - Guide d'utilisation

## 📧 Templates créés pour EmailJS

- `emailjs-template.html` - Version française optimisée pour EmailJS
- `emailjs-template-en.html` - Version anglaise optimisée pour EmailJS

## 🚀 Comment les utiliser dans EmailJS

### 1. Connectez-vous à EmailJS
1. Allez sur [emailjs.com](https://www.emailjs.com/)
2. Connectez-vous à votre compte
3. Accédez à votre service email

### 2. Créer/Modifier un template
1. Dans le dashboard EmailJS, cliquez sur **"Email Templates"**
2. Cliquez sur **"Create New Template"** ou éditez un existant
3. Dans la section **"Content"**, passez en mode **HTML**
4. **Copiez-collez** le contenu du fichier `emailjs-template.html`

### 3. Variables EmailJS utilisées
Les templates utilisent ces variables que vous devez configurer :
- `{{from_name}}` - Nom de l'expéditeur (depuis votre formulaire)
- `{{category}}` - Catégorie du projet (depuis votre dropdown)
- `{{from_email}}` - Email de l'expéditeur (automatique)

### 4. Configuration dans votre Contact.tsx
Assurez-vous que votre formulaire envoie les bonnes variables :
```javascript
const templateParams = {
  from_name: formData.name,        // → {{from_name}}
  from_email: formData.email,      // → {{from_email}}
  message: formData.message,       // → {{message}}
  category: formData.category,     // → {{category}}
  to_email: 'hugo.nahmiaspro@outlook.com'
};
```

## ✨ Spécificités des templates EmailJS

### Styles inline uniquement
- Tous les styles sont en `style=""` inline
- Pas de CSS externe ou de `<style>` tags
- Compatible avec tous les clients email

### Variables dynamiques
- `{{from_name}}` : Nom personnalisé dans le salut
- `{{category}}` : Catégorie du projet dans le message
- Adaptation automatique du contenu

### Design optimisé
- **Largeur max** : 600px (standard email)
- **Couleurs** : Cohérentes avec votre portfolio
- **Responsive** : S'adapte aux mobiles
- **Professionnel** : Design épuré et moderne

## 🔧 Étapes de configuration

### Dans EmailJS :
1. **Template ID** : Notez l'ID de votre template
2. **Service ID** : Votre service email configuré
3. **Public Key** : Votre clé publique EmailJS

### Dans votre code :
Mettez à jour les IDs dans `Contact.tsx` :
```javascript
const serviceId = 'votre_service_id';     // À remplacer
const templateId = 'votre_template_id';   // À remplacer  
const publicKey = 'votre_public_key';     // À remplacer
```

## 📋 Checklist de déploiement

- [ ] Template copié dans EmailJS
- [ ] Variables testées ({{from_name}}, {{category}})
- [ ] Service ID configuré
- [ ] Template ID configuré
- [ ] Public Key configurée
- [ ] Test d'envoi depuis le formulaire
- [ ] Vérification de la réception
- [ ] Test sur mobile et desktop

## 🎯 Test rapide

1. **Copiez** le template dans EmailJS
2. **Testez** avec l'outil de test EmailJS
3. **Envoyez** un message depuis votre formulaire
4. **Vérifiez** la réception et l'affichage

## 💡 Conseils

- **Testez toujours** avant la mise en production
- **Prévisualisez** dans différents clients email
- **Gardez une sauvegarde** de vos templates
- **Mettez à jour** les URLs de votre portfolio

---

🎨 **Templates prêts pour une utilisation professionnelle !**