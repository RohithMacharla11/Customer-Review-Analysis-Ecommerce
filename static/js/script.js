document.addEventListener('DOMContentLoaded', () => {
    // Analysis Page Charts
    if (typeof analysisData !== 'undefined' && typeof platformName !== 'undefined') {
        const barCtx = document.getElementById('barChart').getContext('2d');
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Positive', 'Negative', 'Neutral'],
                datasets: [{
                    label: `Sentiment Count (${platformName})`,
                    data: [analysisData.positive, analysisData.negative, analysisData.neutral],
                    backgroundColor: ['#4CAF50', '#F44336', '#FFC107']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { position: 'top' } }
            }
        });

        const pieCtx = document.getElementById('pieChart').getContext('2d');
        new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Positive', 'Negative', 'Neutral'],
                datasets: [{
                    data: [analysisData.positive, analysisData.negative, analysisData.neutral],
                    backgroundColor: ['#4CAF50', '#F44336', '#FFC107']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'right' } }
            }
        });

        const scoreCtx = document.getElementById('scoreDistribution').getContext('2d');
        new Chart(scoreCtx, {
            type: 'line',
            data: {
                labels: ['Positive', 'Negative', 'Neutral'],
                datasets: [{
                    label: 'Average Sentiment Score (Hypothetical)',
                    data: [0.5, -0.5, 0.0], // Replace with actual score averages if available
                    fill: false,
                    borderColor: '#007BFF',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true, min: -1, max: 1 } },
                plugins: { legend: { position: 'top' } }
            }
        });
    }

    // Comparison Page Chart
    if (typeof comparisonData !== 'undefined') {
        const platforms = Object.keys(comparisonData);
        const positiveData = platforms.map(p => comparisonData[p].positive);
        const negativeData = platforms.map(p => comparisonData[p].negative);
        const neutralData = platforms.map(p => comparisonData[p].neutral);

        const cmpCtx = document.getElementById('comparisonChart').getContext('2d');
        new Chart(cmpCtx, {
            type: 'bar',
            data: {
                labels: platforms.map(p => p.capitalize()),
                datasets: [{
                    label: 'Positive',
                    data: positiveData,
                    backgroundColor: '#4CAF50'
                }, {
                    label: 'Negative',
                    data: negativeData,
                    backgroundColor: '#F44336'
                }, {
                    label: 'Neutral',
                    data: neutralData,
                    backgroundColor: '#FFC107'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { position: 'top' } }
            }
        });
    }
});