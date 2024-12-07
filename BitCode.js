/** @jsxImportSource https://esm.sh/react */
import React, { useState, useEffect } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";

// Enhanced user management with more robust initial data
const initialUsers = [
  { 
    id: 1, 
    username: "farmer_john", 
    password: "farmpass", 
    role: "Farmer", 
    email: "john@example.com",
    fullName: "John Farmer"
  },
  { 
    id: 2, 
    username: "investor_sarah", 
    password: "investpass", 
    role: "Investor", 
    email: "sarah@example.com",
    fullName: "Sarah Investor"
  }
];

// Define base styles first
const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f0f0f0',
  },
  logo: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    gap: '10px',
  },
  page: {
    padding: '20px',
    textAlign: 'center',
  },
  listingCard: {
    border: '1px solid #ddd',
    margin: '10px',
    padding: '10px',
  },
  aiInsight: {
    backgroundColor: '#e6f3ff',
    padding: '10px',
    margin: '10px 0',
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#f0f0f0',
  },
  // Form-related styles
  formContainer: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  formInput: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  },
  formButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  formLink: {
    display: 'block',
    marginTop: '15px',
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  formError: {
    color: 'red',
    marginBottom: '10px',
  }
};

// Rest of the code remains the same as in the previous implementation
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(initialUsers);
  const [aiInsight, setAiInsight] = useState('');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
    navigateTo('dashboard');
  };

  const handleSignup = (newUser) => {
    // Generate a unique ID for the new user
    const userWithId = {
      ...newUser,
      id: users.length + 1
    };

    // Add the new user to the users array
    setUsers(prevUsers => [...prevUsers, userWithId]);
    
    // Log in the new user
    setIsLoggedIn(true);
    setCurrentUser(userWithId);
    navigateTo('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigateTo('home');
  };

  useEffect(() => {
    getAgriculturalInsight("sustainable farming").then(setAiInsight);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage navigateTo={navigateTo} />;
      case 'get-started': return <GetStartedPage navigateTo={navigateTo} />;
      case 'login': return <LoginPage 
        users={users} 
        onLogin={handleLogin} 
        navigateTo={navigateTo} 
      />;
      case 'signup': return <SignupPage 
        onSignup={handleSignup} 
        navigateTo={navigateTo} 
      />;
      case 'dashboard': return <DashboardPage 
        user={currentUser} 
        navigateTo={navigateTo} 
        onLogout={handleLogout}
      />;
      case 'marketplace': return <MarketplacePage 
        navigateTo={navigateTo} 
        aiInsight={aiInsight}
      />;
      case 'buyers': return <BuyersPage 
        navigateTo={navigateTo} 
        aiInsight={aiInsight}
      />;
      case 'collaborate': return <CollaboratePage 
        navigateTo={navigateTo} 
        aiInsight={aiInsight}
      />;
      case 'ai-consultation': return <AIConsultationPage 
        navigateTo={navigateTo} 
        isLoggedIn={isLoggedIn}
      />;
      default: return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div style={styles.app}>
      <Header 
        isLoggedIn={isLoggedIn} 
        user={currentUser} 
        navigateTo={navigateTo} 
        onLogout={handleLogout}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

function SignupPage({ onSignup, navigateTo }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    fullName: '',
    role: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.username || !formData.password || !formData.email) {
      setError('Please fill in all required fields');
      return;
    }

    // Prepare user object for signup
    const newUser = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      fullName: formData.fullName,
      role: formData.role || 'User'
    };

    // Clear any previous errors
    setError('');

    // Call signup handler
    onSignup(newUser);
  };

  return (
    <div style={styles.page}>
      <div style={styles.formContainer}>
        <h1>Sign Up for BitFarm</h1>
        {error && <div style={styles.formError}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="username"
            placeholder="Username" 
            value={formData.username}
            onChange={handleChange}
            style={styles.formInput}
            required
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            style={styles.formInput}
            required
          />
          <input 
            type="text" 
            name="fullName"
            placeholder="Full Name" 
            value={formData.fullName}
            onChange={handleChange}
            style={styles.formInput}
          />
          <select 
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={styles.formInput}
          >
            <option value="">Select Role</option>
            <option value="Farmer">Farmer</option>
            <option value="Investor">Investor</option>
            <option value="Land Owner">Land Owner</option>
            <option value="AgriTech Expert">AgriTech Expert</option>
            <option value="Agricultural Graduate">Agricultural Graduate</option>
          </select>
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange}
            style={styles.formInput}
            required
          />
          <input 
            type="password" 
            name="confirmPassword"
            placeholder="Confirm Password" 
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.formInput}
            required
          />
          <button 
            type="submit" 
            style={styles.formButton}
          >
            Create Account
          </button>
        </form>
        <div 
          style={styles.formLink}
          onClick={() => navigateTo('login')}
        >
          Already have an account? Login
        </div>
      </div>
    </div>
  );
}

function LoginPage({ users, onLogin, navigateTo }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => 
      u.username === username && u.password === password
    );

    if (user) {
      onLogin(user);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.formContainer}>
        <h1>Login to BitFarm</h1>
        {error && <div style={styles.formError}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.formInput}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.formInput}
            required
          />
          <button 
            type="submit" 
            style={styles.formButton}
          >
            Login
          </button>
        </form>
        <div 
          style={styles.formLink}
          onClick={() => navigateTo('signup')}
        >
          Don't have an account? Sign Up
        </div>
      </div>
    </div>
  );
}

function Header({ isLoggedIn, user, navigateTo, onLogout }) {
  return (
    <header style={styles.header}>
      <div style={styles.logo} onClick={() => navigateTo('home')}>
        🚜 BitFarm
      </div>
      <nav style={styles.nav}>
        <button onClick={() => navigateTo('marketplace')}>Marketplace</button>
        <button onClick={() => navigateTo('buyers')}>Buyers</button>
        <button onClick={() => navigateTo('collaborate')}>Collaborate</button>
        <button onClick={() => navigateTo('ai-consultation')}>AI Consultation</button>
        {!isLoggedIn ? (
          <button onClick={() => navigateTo('login')}>Login</button>
        ) : (
          <>
            <span>Welcome, {user.username}</span>
            <button onClick={onLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}

function HomePage({ navigateTo }) {
  return (
    <div style={styles.page}>
      <h1>Welcome to BitFarm</h1>
      <p>Connecting Agricultural Professionals and Opportunities</p>
      <button onClick={() => navigateTo('get-started')}>Get Started</button>
    </div>
  );
}

function GetStartedPage({ navigateTo }) {
  return (
    <div style={styles.page}>
      <h1>Get Started with BitFarm</h1>
      <div>
        <h2>Who Can Join?</h2>
        <ul>
          <li>Investors</li>
          <li>Land Owners</li>
          <li>Farmers</li>
          <li>AgriTech Experts</li>
          <li>Agricultural Graduates</li>
        </ul>
        <button onClick={() => navigateTo('login')}>Create Account</button>
      </div>
    </div>
  );
}

function DashboardPage({ user, navigateTo, onLogout }) {
  return (
    <div style={styles.page}>
      <h1>Dashboard</h1>
      <p>Welcome, {user.username}!</p>
      <div>
        <button onClick={() => navigateTo('marketplace')}>Go to Marketplace</button>
        <button onClick={() => navigateTo('buyers')}>View Buyer Requests</button>
        <button onClick={() => navigateTo('collaborate')}>Collaboration Hub</button>
      </div>
    </div>
  );
}

function MarketplacePage({ navigateTo, aiInsight }) {
  const [listings, setListings] = useState([
    { id: 1, title: "Premium Agricultural Land", price: "$500,000" },
    { id: 2, title: "Modern Irrigation System", price: "$75,000" }
  ]);

  return (
    <div style={styles.page}>
      <h1>BitFarm Marketplace</h1>
      <div style={styles.aiInsight}>
        <h3>AI Agricultural Insight</h3>
        <p>{aiInsight}</p>
      </div>
      <h2>Current Listings</h2>
      {listings.map(listing => (
        <div key={listing.id} style={styles.listingCard}>
          <h3>{listing.title}</h3>
          <p>Price: {listing.price}</p>
          <button onClick={() => alert(`Interested in ${listing.title}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

function BuyersPage({ navigateTo, aiInsight }) {
  const [buyerRequests, setBuyerRequests] = useState([
    { id: 1, product: "Organic Wheat", quantity: "100 tons" },
    { id: 2, product: "Advanced Farm Equipment", quantity: "5 units" }
  ]);

  return (
    <div style={styles.page}>
      <h1>Buyers Hub</h1>
      <div style={styles.aiInsight}>
        <h3>AI Agricultural Insight</h3>
        <p>{aiInsight}</p>
      </div>
      <h2>Current Buyer Requests</h2>
      {buyerRequests.map(request => (
        <div key={request.id} style={styles.listingCard}>
          <h3>{request.product}</h3>
          <p>Quantity: {request.quantity}</p>
          <button onClick={() => alert(`Responding to ${request.product} request`)}>
            Respond to Request
          </button>
        </div>
      ))}
    </div>
  );
}

function CollaboratePage({ navigateTo, aiInsight }) {
  const [collaborations, setCollaborations] = useState([
    { id: 1, title: "Sustainable Farming Initiative", participants: 5 },
    { id: 2, title: "AgriTech Innovation Workshop", participants: 12 }
  ]);

  return (
    <div style={styles.page}>
      <h1>Collaboration Hub</h1>
      <div style={styles.aiInsight}>
        <h3>AI Agricultural Insight</h3>
        <p>{aiInsight}</p>
      </div>
      <h2>Current Collaboration Opportunities</h2>
      {collaborations.map(collab => (
        <div key={collab.id} style={styles.listingCard}>
          <h3>{collab.title}</h3>
          <p>Participants: {collab.participants}</p>
          <button onClick={() => alert(`Joining ${collab.title}`)}>
            Join Collaboration
          </button>
        </div>
      ))}
    </div>
  );
}

function AIConsultationPage({ navigateTo, isLoggedIn }) {
  const [agriculturalTopic, setAgriculturalTopic] = useState('');
  const [contextDetails, setContextDetails] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAIConsultation = async () => {
    if (!isLoggedIn) {
      alert('Please login to use AI Consultation');
      navigateTo('login');
      return;
    }

    setIsLoading(true);
    try {
      const response = await getAgriculturalInsight(agriculturalTopic, contextDetails);
      setAiResponse(response);
    } catch (error) {
      setAiResponse('Error generating consultation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <h1>🤖 BitFarm AI Agricultural Consultation</h1>
      <div style={styles.formContainer}>
        <input 
          type="text" 
          placeholder="Enter Agricultural Topic (e.g., Crop Rotation)" 
          value={agriculturalTopic}
          onChange={(e) => setAgriculturalTopic(e.target.value)}
          style={styles.formInput}
        />
        <textarea 
          placeholder="Provide additional context (optional)" 
          value={contextDetails}
          onChange={(e) => setContextDetails(e.target.value)}
          style={styles.textarea}
        />
        <button 
          onClick={handleAIConsultation} 
          disabled={!agriculturalTopic || isLoading}
          style={styles.formButton}
        >
          {isLoading ? 'Generating Consultation...' : 'Get AI Consultation'}
        </button>
      </div>
      {aiResponse && (
        <div style={styles.aiResponseContainer}>
          <h2>AI Consultation Result</h2>
          <pre style={styles.aiResponseText}>{aiResponse}</pre>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 BitFarm - Connecting Agricultural Professionals</p>
    </footer>
  );
}

// AI Agricultural Insights Function
async function getAgriculturalInsight(topic, context = "") {
  try {
    const { OpenAI } = await import("https://esm.town/v/std/openai");
    const openai = new OpenAI();
    const response = await openai.chat.completions.create({
      messages: [{ 
        role: "user", 
        content: `Provide a detailed agricultural consultation about: ${topic}. 
                  Additional context: ${context}. 
                  Structure your response with:
                  1. Brief Overview
                  2. Key Recommendations
                  3. Potential Challenges` 
      }],
      model: "gpt-4o-mini",
      max_tokens: 300
    });
    return response.choices[0].message.content;
  } catch (error) {
    return "Unable to generate AI insight at the moment.";
  }
}

function client() {
  createRoot(document.getElementById("root")).render(<App />);
}

if (typeof document !== "undefined") { client(); }

export default async function server(request: Request): Promise<Response> {
  return new Response(`
    <html>
      <head>
        <title>BitFarm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <div id="root"></div>
        <script src="https://esm.town/v/std/catch"></script>
        <script type="module" src="${import.meta.url}"></script>
      </body>
    </html>
  `, {
    headers: { "content-type": "text/html" }
  });
}