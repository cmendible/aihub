﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var contentSafetyDropdown = document.getElementById('contentSafetyDropdown');
var contentSafetyDropdownMenu = document.getElementById('contentSafetyDropdownMenu');

contentSafetyDropdown.addEventListener('click', function () {
    contentSafetyDropdownMenu.classList.toggle('show');
});

var documentComparisonDropdown = document.getElementById('documentComparisonDropdown');
var documentComparisonDropdownMenu = document.getElementById('documentComparisonDropdownMenu');

documentComparisonDropdown.addEventListener('click', function () {
    documentComparisonDropdownMenu.classList.toggle('show');
});

function submitForm() {
    // Disable the button
    var btn = document.querySelector('button[type="submit"]');
    btn.disabled = true;

    // Show the loading panel
    var loadingPanel = document.getElementById('loadingPanel');
    loadingPanel.style.display = 'block';

    // Submit the form
    var form = document.querySelector('form');
    form.submit();
}
window.onload = function () {
    // Enable the button
    var btn = document.querySelector('button[type="submit"]');
    btn.disabled = false;

    // Hide the loading panel
    var loadingPanel = document.getElementById('loadingPanel');
    loadingPanel.style.display = 'none';
}

function copyText(text) {
    document.getElementById("text").value = text;
}