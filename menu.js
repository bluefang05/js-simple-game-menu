class Menu {
  // Constructor initializes the menu properties
  constructor({ menuData, title, subtitle, buttonNames }) {
    this.menuData = menuData;      // Array of menu items
    this.menuElement = null;      
    this.title = title;           // Optional menu title
    this.subtitle = subtitle;     // Optional menu subtitle
    this.buttonNames = buttonNames || { close: 'Close', show: 'Show Menu' };  
                                 // Default button names
  }

  // Creates menu items recursively
  createMenuItems(menuData) {
    const menuList = document.createElement('ul');  // Create the <ul> element

    for (let i = 0; i < menuData.length; i++) {
      const menuItem = menuData[i];             // Get the menu item object
      const menuItemElement = document.createElement('li'); // Create <li> element

      menuItemElement.textContent = menuItem.label;   // Set menu item label

      // If menu item has a submenu, create it recursively
      if (menuItem.submenu && menuItem.submenu.length > 0) {  
        const submenu = this.createMenuItems(menuItem.submenu);
        submenu.classList.add('submenu');         
        submenu.style.display = 'none';          
        // Make submenu hidden initially  

        menuItemElement.appendChild(submenu);      
        menuItemElement.addEventListener('click', (e) => {
          e.stopPropagation();  
          // Stop event bubbling to prevent hiding all submenus
          if (submenu.style.display === 'none') {  
            this.hideSubmenu(menuList);  
          }
          this.toggleSubmenu(submenu);     // Toggle submenu visibility
        });
      } else {
        menuItemElement.addEventListener('click', menuItem.onClick);  
                                 // Add click handler for menu item
      }

      menuList.appendChild(menuItemElement); // Add menu item to list
    }

    return menuList;  // Return the menu list
  }

  // Hides all submenus in a menu list
  hideSubmenu(list) {
    const submenus = list.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
      submenu.style.display = 'none';  
      this.hideSubmenu(submenu);      // Hide submenus recursively
    });
  }

  // Creates the entire menu
  createMenu() {
    const menuList = this.createMenuItems(this.menuData);  // Create menu items
    
    const closeButton = document.createElement('button');
    closeButton.textContent = this.buttonNames.close;
    closeButton.addEventListener('click', () => {
      this.hide();                  // Hide menu when close button is clicked
    });

    this.menuElement = document.createElement('div');
    this.menuElement.classList.add('menu', 'menu-container');

    if (this.title) {               // Add title if provided
      const titleElement = document.createElement('div');
      titleElement.classList.add('menu-title');
      titleElement.textContent = this.title;
      this.menuElement.appendChild(titleElement);
    }

    if (this.subtitle) {           // Add subtitle if provided  
      const subtitleElement = document.createElement('div');
      subtitleElement.classList.add('menu-subtitle');
      subtitleElement.textContent = this.subtitle;
      this.menuElement.appendChild(subtitleElement);
    }

    this.menuElement.appendChild(menuList);  
    this.menuElement.appendChild(closeButton);
    document.body.appendChild(this.menuElement);  
  }

  // Toggles menu visibility
  toggle() { 
    this.menuElement.classList.toggle('visible');
  }

  // Hides the menu
  hide() { 
    this.menuElement.classList.remove('visible');
  }

  // Toggles submenu
  toggleSubmenu(submenu) {
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  }
}