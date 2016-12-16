'use strict';
var menuItems = [].slice.call(document.querySelectorAll('.menu__item')),
  menuSubs = [].slice.call(document.querySelectorAll('.dropdown-menu')),
  selectedMenu = undefined,
  subBg = document.querySelector('.dropdown__bg'),
  subBgBtm = document.querySelector('.dropdown__bg-bottom'),
  subArr = document.querySelector('.dropdown__arrow'),
  subCnt = document.querySelector('.dropdown__wrap'),
  header = document.querySelector('.main-header'),
  closeDropdownTimeout, startCloseTimeout = function startCloseTimeout() {
    closeDropdownTimeout = setTimeout(function() {
      return closeDropdown();
    }, 50);
  },
  stopCloseTimeout = function stopCloseTimeout() {
    clearTimeout(closeDropdownTimeout);
  },
  openDropdown = function openDropdown(el) {
    var menuId = el.getAttribute('data-sub');
    var menuSub = document.querySelector('.dropdown-menu[data-sub="' + menuId + '"]');
    var menuSubCnt = menuSub.querySelector('.dropdown-menu__content');
    var menuSubBtm = menuSubCnt.querySelector('.bottom-section').getBoundingClientRect();
    var menuSubTop = menuSubCnt.querySelector('.top-section').getBoundingClientRect();
    var menuMeta = el.getBoundingClientRect();
    var subMeta = menuSubCnt.getBoundingClientRect();
    selectedMenu = menuId;
    menuItems.forEach(function(el) {
      return el.classList.remove('active');
    });
    el.classList.add('active');
    menuSubs.forEach(function(el) {
      return el.classList.remove('active');
    });
    menuSub.classList.add('active');
    subBg.style.opacity = 1;
    subBg.style.left = menuMeta.left - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
    subBg.style.width = subMeta.width + 'px';
    subBg.style.height = subMeta.height + 'px';
    subBgBtm.style.top = menuSubTop.height + 'px';
    console.log(menuSubBtm);
    subArr.style.opacity = 1;
    subArr.style.left = menuMeta.left + menuMeta.width / 2 - 10 + 'px';
    subCnt.style.opacity = 1;
    subCnt.style.left = menuMeta.left - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
    subCnt.style.width = subMeta.width + 'px';
    subCnt.style.height = subMeta.height + 'px';
    menuSub.style.opacity = 1;
    header.classList.add('dropdown-active');
  },
  closeDropdown = function closeDropdown() {
    menuItems.forEach(function(el) {
      return el.classList.remove('active');
    });
    menuSubs.forEach(function(el) {
      el.classList.remove('active');
      el.style.opacity = 0;
    });
    subBg.style.opacity = 0;
    subArr.style.opacity = 0;
    selectedMenu = undefined;
    header.classList.remove('dropdown-active');
  };
menuItems.forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    stopCloseTimeout();
    openDropdown(this);
  }, false);
  el.addEventListener('mouseleave', function() {
    return startCloseTimeout();
  }, false);
});
menuSubs.forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    return stopCloseTimeout();
  }, false);
  el.addEventListener('mouseleave', function() {
    return startCloseTimeout();
  }, false);
});
