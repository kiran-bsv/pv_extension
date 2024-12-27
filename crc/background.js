chrome.runtime.onInstalled.addListener(() => {
    // Add a listener to intercept network requests
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [
        {
          id: 1,
          action: {
            type: "redirect",
            redirect: {
              url: "http://localhost:3000" // Redirect to your new URL
            }
          },
          condition: {
            urlFilter: "https://townandsea.com/wp-admin/admin-ajax.php",
            resourceTypes: ["xmlhttprequest"]
          }
        }
      ],
      removeRuleIds: [1] // Remove existing rules to avoid duplication
    });
  });
  