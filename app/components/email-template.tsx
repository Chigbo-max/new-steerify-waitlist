// components/email-template.tsx
interface EmailTemplateProps {
  email: string;
  name?: string;
}

export default function EmailTemplate({ email, name }: EmailTemplateProps) {
  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', 
      lineHeight: '1.5', 
      padding: '20px',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{ 
        maxWidth: '560px', 
        margin: '0 auto', 
        backgroundColor: 'white', 
        borderRadius: '8px', 
        padding: '40px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ 
            color: '#111827', 
            fontSize: '28px', 
            fontWeight: 'bold',
            marginBottom: '16px' 
          }}>
            Welcome to Steerify Waitlist! 🎉
          </h1>
        </div>
        
        <p style={{ 
          color: '#374151', 
          fontSize: '16px', 
          marginBottom: '20px',
          lineHeight: '1.6'
        }}>
          Hello {name ? name : 'there'},
        </p>
        
        <p style={{ 
          color: '#374151', 
          fontSize: '16px', 
          marginBottom: '20px',
          lineHeight: '1.6'
        }}>
          Thank you for joining the Steerify waitlist! We're excited to have you on board. 
          We've received your email address (<strong>{email}</strong>) and will keep you 
          updated on our progress.
        </p>
        
        <p style={{ 
          color: '#374151', 
          fontSize: '16px', 
          marginBottom: '20px',
          lineHeight: '1.6'
        }}>
          We're working hard to create Nigeria's #1 Smart Cleaning Marketplace and can't 
          wait to share this amazing platform with you. You'll be among the first to know 
          when we launch!
        </p>
        
        <div style={{ 
          backgroundColor: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '8px',
          padding: '16px',
          margin: '24px 0'
        }}>
          <p style={{ 
            color: '#166534', 
            fontSize: '14px', 
            margin: 0,
            textAlign: 'center',
            fontWeight: '500'
          }}>
            🚀 Early access benefits: Priority bookings, exclusive discounts & premium placement
          </p>
        </div>
        
        <p style={{ 
          color: '#374151', 
          fontSize: '16px', 
          marginBottom: '8px' 
        }}>
          Best regards,
        </p>
        <p style={{ 
          color: '#111827', 
          fontSize: '16px', 
          fontWeight: '600',
          marginBottom: '30px'
        }}>
          The Steerify Team
        </p>
        
        <div style={{ 
          borderTop: '1px solid #e5e7eb', 
          paddingTop: '20px',
          textAlign: 'center'
        }}>

          <p style={{ 
            color: '#6b7280', 
            fontSize: '12px',
            margin: 0
          }}>
            Steerify - Nigeria's Smart Cleaning Marketplace<br />
            Making cleaning services accessible and reliable
          </p>
        </div>
      </div>
    </div>
  );
}