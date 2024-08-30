async function notifyServer() {
  // Create an instance of the URL for the API endpoint
  const apiEndpoint = 'https://api.sivothajan.me/api/notify';

  // Collect the data to be sent in the request
  // We won't include URL and timestamp here; they will be generated server-side
  const deviceInfo = {
    // Example data; replace with actual data collection if needed
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    screenWidth: screen.width,
    screenHeight: screen.height,
    colorDepth: screen.colorDepth,
    touchEnabled: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
  };

  const currentPageUrl = window.location.href || 'Unknown';

  try {
    // Send POST request to the server
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceInfo: JSON.stringify(deviceInfo), // Send the device info as a JSON string
        currentPageUrl: currentPageUrl, // Include the current page URL
      }),
    });

    // Check if the response is okay
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse and log the response
    const data = await response.json();
    console.log(data.message); // Output the response message to the console
  } catch (error) {
    console.error('Error:', error); // Log any errors that occur
  }
}

// Call the function to notify the server
notifyServer();
