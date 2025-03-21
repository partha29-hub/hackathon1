// Dark Mode Toggle with Local Storage
const themeButton = document.getElementById("theme-button");
const body = document.body;

// Function to apply dark mode based on local storage
function applyDarkMode() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    body.classList.toggle("dark-mode", isDarkMode);
    themeButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
}

// Toggle dark mode and store preference
themeButton.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
    themeButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});

// Apply dark mode on page load
applyDarkMode();

// Chart.js Financial Data Visualization
let financialChart;
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("financialChart").getContext("2d");

    // Function to generate random financial data
    function generateRandomData() {
        return Array.from({ length: 6 }, () => (Math.random() * 2 + 4).toFixed(1)); // GDP Growth: 4% - 6%
    }

    function generateInflationData() {
        return Array.from({ length: 6 }, () => (Math.random() * 2 + 2.5).toFixed(1)); // Inflation: 2.5% - 4.5%
    }

    // Function to create the financial chart
    function createFinancialChart() {
        financialChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                    {
                        label: "GDP Growth (%)",
                        data: generateRandomData(),
                        borderColor: "#2E8B57",
                        backgroundColor: "rgba(46, 139, 87, 0.2)",
                        borderWidth: 2,
                        fill: true,
                    },
                    {
                        label: "Inflation Rate (%)",
                        data: generateInflationData(),
                        borderColor: "#FF4500",
                        backgroundColor: "rgba(255, 69, 0, 0.2)",
                        borderWidth: 2,
                        fill: true,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: "top",
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    // Initialize the chart
    createFinancialChart();

    // Button to refresh chart data
    const updateButton = document.createElement("button");
    updateButton.textContent = "Refresh Data";
    updateButton.style.display = "block";
    updateButton.style.margin = "20px auto";
    updateButton.style.padding = "10px 20px";
    updateButton.style.fontSize = "16px";
    updateButton.style.cursor = "pointer";
    updateButton.style.backgroundColor = "#003366";
    updateButton.style.color = "#fff";
    updateButton.style.border = "none";
    updateButton.style.borderRadius = "5px";

    updateButton.addEventListener("click", () => {
        // Update chart data dynamically
        financialChart.data.datasets[0].data = generateRandomData();
        financialChart.data.datasets[1].data = generateInflationData();
        financialChart.update();
    });

    document.querySelector(".dashboard-preview").appendChild(updateButton);
});