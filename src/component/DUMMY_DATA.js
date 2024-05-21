export const lineChartData ={
    labels:[
        'January', 'February', 'March', 'April', 'May', 'June', 'July'
    ],
    datasets:[
        {
            label:"No. of times michael fasted",
            data:[8,5,7,7,6,7,7],
            borderColor: 'pink'
        },
        {
            label:"No. of times Abigail fasted",
            data:[8,5,5,6,6,4,7],
            borderColor: 'rgba(75,192,192,1)'
        },
    ]
};

export const barChartData ={
    labels:[
        'Rent', 'Groceries', 'utilities', 'Entertainment', 'Transportation'
    ],
    datasets:[
        {
            label:" Abigail's Expenses",
            data:[150000,30000,70000,25000,20000],
            borderColor: 'blue',
            borderWidth:'1'
        },
        {
            label:"Michael's Expenses",
            data:[200000,20000,50000,15000,30000],
            borderColor: 'pink',
            borderWidth:'2'
        },
    ]
};

export const pieChartData ={
    labels:[
        'Instagram', 'Facebook', 'Twitter', 'Youtube', 'Netflix',
    ],
    datasets:[
        {
            label:"Hours Spent on Social media",
            data:[2,2,4,2,2],
            backgroundColor:[
                "red",
                "blue",
                "green",
                "yellow",
                "brown",
                

            ]
        }
    ]
};
