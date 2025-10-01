import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
}) => (
  <div style={{ 
    fontFamily: 'Arial, sans-serif', 
    lineHeight: '1.6', 
    color: '#333',
    maxWidth: '600px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #3B82F6 0%, #3B82F6 50%, #0EA5E9 100%)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    {/* Pattern Background Overlay */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url(https://steerifywaitlist.vercel.app/images/pattern.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: '0.1',
      pointerEvents: 'none'
    }} />
    
    {/* Content Container */}
    <div style={{
      position: 'relative',
      zIndex: 1,
      padding: '40px 30px',
      color: 'white'
    }}>
      
      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img 
          src="https://steerifywaitlist.vercel.app/images/steerify-logo-new.png" 
          alt="Steerify" 
          style={{ 
            height: '50px', 
            width: 'auto',
            marginBottom: '20px'
          }} 
        />
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold',
          margin: '0',
          color: 'white'
        }}>
          Welcome to Steerify! 🎉
        </h1>
      </div>

      {/* Main Content Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '30px',
        color: '#333',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px'
      }}>
        <p style={{ fontSize: '16px', marginBottom: '15px' }}>
          Hello <strong style={{ color: '#3B82F6' }}>{name}</strong>,
        </p>
        
        <p style={{ fontSize: '16px', marginBottom: '15px' }}>
          Thank you for joining the Steerify Cleaning waitlist! We're thrilled to have you on board as we revolutionize the cleaning service industry.
        </p>
        
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
          You'll be among the first to know when we launch in your area. Get ready to experience seamless cleaning services at your fingertips!
        </p>

        {/* Info Box */}
        <div style={{
          backgroundColor: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          padding: '15px',
          margin: '20px 0'
        }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#64748B' }}>
            <strong style={{ color: '#3B82F6' }}>Registered email:</strong><br />
            {email}
          </p>
        </div>

        {/* Next Steps */}
        <div style={{
          backgroundColor: '#F0F9FF',
          borderLeft: '4px solid #0EA5E9',
          padding: '15px',
          margin: '20px 0',
          borderRadius: '0 8px 8px 0'
        }}>
          <h3 style={{ 
            color: '#0C4A6E', 
            margin: '0 0 10px 0',
            fontSize: '16px'
          }}>
            What's Next?
          </h3>
          <ul style={{ 
            margin: '0', 
            paddingLeft: '20px',
            color: '#475569',
            fontSize: '14px'
          }}>
            <li>Early access to our platform</li>
            <li>Exclusive launch offers</li>
            <li>Priority booking for services</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        textAlign: 'center', 
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '14px'
      }}>
        <p style={{ margin: '0 0 10px 0' }}>
          Best regards,<br />
          <strong>The Steerify Team</strong>
        </p>
        
        <hr style={{ 
          border: 'none', 
          borderTop: '1px solid rgba(255, 255, 255, 0.3)', 
          margin: '20px 0' 
        }} />
        
        <p style={{ 
          fontSize: '12px', 
          color: 'rgba(255, 255, 255, 0.6)',
          margin: '0'
        }}>
          If you didn't sign up for Steerify, please ignore this email.<br />
          © 2024 Steerify Cleaning. All rights reserved.
        </p>
      </div>
    </div>
  </div>
);

export default EmailTemplate;