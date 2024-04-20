import React from 'react';

// CSS styling
const styles = {
  navbar: {
    backgroundColor: '#9D73DC',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between', // Adjusted to create space for the search bar and button
    alignItems: 'center',
  },
  navbarBrand: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginRight: '20px', // Add margin to separate links
    transition: 'color 0.4s', // Smooth transition for color change
  },
  navbarLink: {
    color: '#574079',
    fontWeight: 600,
    fontSize: '1rem',
    textDecoration: 'none',
    marginLeft: '20px', // Add margin to separate links
    transition: 'color 0.4s', // Smooth transition for color change
    fontFamily: 'Arial, sans-serif', // Change font family
  },
  navbarLinkHover: {
    color: 'white', // New color on hover
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  searchBar: {
    marginRight: '10px',
    padding: '5px',
    border: 'none',
    borderRadius: '5px',
    width: '200px',
  },
  searchButton: {
    padding: '5px 10px',
    backgroundColor: '#574079',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.4s', // Smooth transition for background color change
  },
  searchButtonHover: {
    backgroundColor: '#574079', // New background color on hover
  },
};

export const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav style={styles.navbar}>
          <span 
            style={styles.navbarBrand} 
            onMouseEnter={(e) => e.target.style.color = styles.navbarLinkHover.color} // Change color on hover
            onMouseLeave={(e) => e.target.style.color = 'black'} // Revert color on mouse leave
          >
            Musical Minds Academy
          </span>
          <div style={styles.searchContainer}>
            <input type="text" placeholder="Search" style={styles.searchBar} />
            <button 
              style={styles.searchButton} 
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.searchButtonHover.backgroundColor} // Change background color on hover
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.searchButton.backgroundColor} // Revert background color on mouse leave
            >
              Search
            </button>
          </div>
          <div>
            <a 
              href="/Home" 
              style={styles.navbarLink} 
              onMouseEnter={(e) => e.target.style.color = styles.navbarLinkHover.color} // Change color on hover
              onMouseLeave={(e) => e.target.style.color = 'black'} // Revert color on mouse leave
            >
              Home
            </a>
            <a 
              href="/teacher" 
              style={styles.navbarLink} 
              onMouseEnter={(e) => e.target.style.color = styles.navbarLinkHover.color} // Change color on hover
              onMouseLeave={(e) => e.target.style.color = 'black'} // Revert color on mouse leave
            >
              Teachers Page
            </a>
            <a 
              href="/timetable" 
              style={styles.navbarLink} 
              onMouseEnter={(e) => e.target.style.color = styles.navbarLinkHover.color} // Change color on hover
              onMouseLeave={(e) => e.target.style.color = 'black'} // Revert color on mouse leave
            >
              Timetable
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}; 
