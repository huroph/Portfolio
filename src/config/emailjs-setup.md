# Configuration EmailJS pour votre portfolio

## Étapes pour configurer l'envoi d'emails :

### 1. Créer un compte EmailJS
- Allez sur https://www.emailjs.com/
- Créez un compte gratuit

### 2. Créer un service email
- Dans le dashboard EmailJS, allez dans "Email Services"
- Cliquez sur "Add new service"
- Choisissez votre fournisseur email (Gmail, Outlook, etc.)
- Suivez les instructions pour connecter votre compte email
- Notez le **Service ID** généré

### 3. Créer un template d'email
- Allez dans "Email Templates"
- Cliquez sur "Create New Template"
- Configurez votre template avec ces variables :
  - `{{from_name}}` - Nom de l'expéditeur
  - `{{from_email}}` - Email de l'expéditeur  
  - `{{message}}` - Message
  - `{{category}}` - Catégorie du projet (🌐 Projet Web, 📱 App Mobile, etc.)
  - `{{to_email}}` - Votre email (hugo.nahmias@icloud.com)
- Notez le **Template ID** généré

### 4. Obtenir votre clé publique
- Allez dans "Account" → "General"
- Copiez votre **Public Key**

### 5. Mettre à jour le code
Dans le fichier `src/components/Contact.tsx`, remplacez :
```javascript
const serviceId = 'your_service_id'; // Remplacez par votre Service ID
const templateId = 'your_template_id'; // Remplacez par votre Template ID  
const publicKey = 'your_public_key'; // Remplacez par votre Public Key
```

### Template d'email à utiliser :

**Sujet :** `Nouveau message depuis votre portfolio`

**Corps du message (HTML) :**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; color: #2c3e50;">
  <div style="margin-bottom: 20px;">
    <h2 style="color: #ff4300; margin-bottom: 10px;">Bonjour Hugo,</h2>
    <p>Vous avez reçu un nouveau message depuis votre portfolio :</p>
  </div>
  
  <!-- Badge de catégorie en haut -->
  <div style="text-align: center; margin-bottom: 20px;">
    <span style="
      display: inline-block;
      background: linear-gradient(135deg, #ff4300, #ff9a6c);
      color: white;
      padding: 8px 20px;
      border-radius: 25px;
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 2px 10px rgba(255, 67, 0, 0.3);
    ">
      📋 {{category}}
    </span>
  </div>
  
  <div
    style="
      margin: 20px 0;
      padding: 20px;
      border-width: 1px 0;
      border-style: dashed;
      border-color: #ff9a6c;
      background-color: #f9f9f9;
    "
  >
    <table role="presentation" style="width: 100%;">
      <tr>
        <td style="vertical-align: top; padding-right: 15px;">
          <div
            style="
              padding: 8px 12px;
              background-color: #ff4300;
              border-radius: 8px;
              font-size: 24px;
              text-align: center;
              color: white;
            "
            role="img"
          >
            📧
          </div>
        </td>
        <td style="vertical-align: top;">
          <div style="margin-bottom: 15px;">
            <div style="color: #2c3e50; font-size: 16px; margin-bottom: 8px;">
              <strong>👤 Contact :</strong> {{from_name}}
            </div>
            <div style="color: #2c3e50; font-size: 16px; margin-bottom: 15px;">
              <strong>📧 Email :</strong> <a href="mailto:{{from_email}}" style="color: #ff4300; text-decoration: none;">{{from_email}}</a>
            </div>
          </div>
          <div style="color: #2c3e50; font-size: 16px;">
            <strong>💬 Message :</strong>
            <div style="
              font-size: 16px; 
              line-height: 1.6; 
              margin-top: 12px; 
              padding: 20px; 
              background-color: white; 
              border-left: 4px solid #ff4300; 
              border-radius: 8px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            ">
              {{message}}
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #888; font-size: 12px;">
    <p>🚀 Envoyé depuis votre portfolio</p>
    <p style="margin-top: 5px; color: #ff4300;">Répondez rapidement pour ne pas rater cette opportunité !</p>
  </div>
</div>
```

Une fois ces étapes terminées, votre formulaire de contact enverra les emails directement sur hugo.nahmias@icloud.com !