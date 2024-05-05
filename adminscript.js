function filterTable(status) {
    var table, rows, cell, statusText;
    table = document.getElementById("myTable");
    rows = table.getElementsByTagName("tr");

    // Loop through all table rows, hide those that don't match the filter status
    for (var i = 0; i < rows.length; i++) {
        cell = rows[i].getElementsByTagName("td")[2]; // Assuming status is in the second column
        if (cell) {
            statusText = cell.textContent || cell.innerText;
            if (statusText.toUpperCase().indexOf(status.toUpperCase()) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.navSelection a');
    const contentNav = document.querySelectorAll('.inner-nav .navContent');
    const content = document.querySelectorAll('.contentPanel .panelContent .content');
    const dashTab = document.querySelectorAll('.contentPanel .panelContent .content .dashboard .dashPanel');
    const dashContent = document.querySelectorAll('.contentPanel .panelContent .content:first-child');

    // This for the dashboard content on load
    dashContent.forEach(dc => dc.classList.add('active'));

    //This is for the Vertical Nav
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // Hide all content panels nav
            contentNav.forEach(panelNav => panelNav.style.display = 'none');
            // Show the corresponding content panel nav
            contentNav[index].style.display = 'flex';

            // Hide all main content panel
            content.forEach(panelContent => panelContent.style.display = 'none');
            // Show the corresponding main content panel
            content[index].style.display = 'flex';
        });
    });

    //This is for the Dashboard Navigation a
    dashTab.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Hide all content panels nav
            contentNav.forEach(panelNav => panelNav.style.display = 'none');
            // Show the corresponding content panel nav
            contentNav[index + 1].style.display = 'flex';

            // Hide all main content panel
            content.forEach(panelContent => panelContent.style.display = 'none');
            // Show the corresponding main content panel
            content[index + 1].style.display = 'flex';
            
            //this gives the active effect on the vertical nav
            tabs.forEach(t => t.classList.remove('active'));
            // Add 'active' class to the clicked tab
            tabs[index + 1].classList.add('active');

        });
    });



    //THIS IS FOR MODAL
    const modal = document.getElementById("myModal");
    const btn1 = document.getElementById("myBtn1");
    const span1 = document.getElementsByClassName("close")[0];
    const chartModal = document.getElementById("chartModal")
    const btn2 = document.getElementById("myBtn2");
    const span2 = document.getElementsByClassName("closechart")[0];

    // Check if modal and related elements are found
    if (!modal || !btn1 || !span1) {
        console.error("Modal elements not found.");
    } else {
        // Open modal on button click
        btn1.onclick = function () {
            modal.style.display = "flex";
        };

        // Close modal on span (x) click
        span1.onclick = function () {
            modal.style.display = "none";
        };

        // Close modal on window click outside modal
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
    //Modal for Chart
    if (!chartModal || !btn2 || !span2) {
        console.error("Modal elements not found.");
    } else {
        // Open modal on button click
        btn2.onclick = function () {
            chartModal.style.display = "flex";
        };

        // Close modal on span (x) click
        span2.onclick = function () {
            chartModal.style.display = "none";
        };

        // Close modal on window click outside modal
        window.onclick = function (event) {
            if (event.target == chartModal) {
                chartModal.style.display = "none";
            }
        };
    }



    //THIS IS FOR THE ANALYTICS CHART
    const ctx = document.getElementById('monthlyChart').getContext('2d');
            const monthlyChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April'],
                    datasets: [{
                        label: 'Monthly Revenue',
                        data: [50000, 48370, 60000, 59280], // Fictional monthly revenue data
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

});