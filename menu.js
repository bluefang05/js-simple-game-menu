class Menu {
    constructor(menuData) {
      this.menuData = menuData;
      this.menuElement = null;
    }
  
    createMenuItems(menuData) {
      const menuList = document.createElement('ul');
  
      for (let i = 0; i < menuData.length; i++) {
        const menuItem = menuData[i];
        const menuItemElement = document.createElement('li');
  
        menuItemElement.textContent = menuItem.label;
  
        if (menuItem.submenu && menuItem.submenu.length > 0) {
          const submenu = this.createMenuItems(menuItem.submenu);
          submenu.classList.add('submenu');
          menuItemElement.appendChild(submenu);
  
          menuItemElement.addEventListener('click', function () {
            this.childNodes[1].style.display = this.childNodes[1].style.display === 'block' ? 'none' : 'block';
          });
        } else {
          menuItemElement.addEventListener('click', () => {
            menuItem.onClick();
            this.hide();
          });
        }
  
        menuList.appendChild(menuItemElement);
      }
  
      return menuList;
    }
  
    createMenu() {
      const menuList = this.createMenuItems(this.menuData);
  
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.addEventListener('click', () => {
        this.hide();
      });
  
      this.menuElement = document.createElement('div');
      this.menuElement.classList.add('menu', 'menu-container');
      this.menuElement.appendChild(menuList);
      this.menuElement.appendChild(closeButton);
      document.body.appendChild(menu.menuElement);

    }
  
    toggle() {
      this.menuElement.classList.toggle('visible');
    }
  
    show() {
      this.menuElement.classList.add('visible');
    }
  
    hide() {
      this.menuElement.classList.remove('visible');
    }
  }
  