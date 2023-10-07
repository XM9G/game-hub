// Check if the user is on a mobile device
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert("Warning: The games may not work properly on mobile.")
    // Redirect to the mobile page
    window.location.href = '/games';
  }