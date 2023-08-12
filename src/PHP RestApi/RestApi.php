<?php
function fetchSpaceXCapsules($params = []) {
    // Default parameters
    $defaultParams = [
        'status' => null,
        'type' => null,
        'originalDate' => null,
    ];

    // Merge provided parameters with default parameters
    $mergedParams = array_merge($defaultParams, $params);

    // Convert parameters to a query string
    $queryString = http_build_query($mergedParams);

    // API URL with query string
    $url = "https://api.spacexdata.com/v3/capsules?" . $queryString;

    // Initialize cURL session
    $ch = curl_init();

    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Disable SSL verification for simplicity

    // Execute cURL session and get the response
    $response = curl_exec($ch);

    // Check for cURL errors
    if (curl_errno($ch)) {
        return 'Curl error: ' . curl_error($ch);
    }

    // Close cURL session
    curl_close($ch);

    // Decode the JSON response
    $data = json_decode($response, true);

    return $data;
}

// Usage
$params = [
    'status' => 'active',
    'type' => 'Dragon',
    'originalDate' => '2023-01-01',
];

$data = fetchSpaceXCapsules($params);

foreach ($data as $capsule) {
    echo "Capsule ID: " . $capsule['capsule_id'] . "<br>";
    echo "Status: " . $capsule['status'] . "<br>";
    echo "Type: " . $capsule['type'] . "<br>";
    echo "Original Launch Date: " . $capsule['original_launch'] . "<br>";
    echo "<hr>";
}
?>
