const courseData = [
    {
        id: 'BA-039',
        name: 'Information System',
        startDate: 'March 11, 2019',
        duration: '2 weeks',
        instructors: 'Jacky Michaels, Anthony Lee',
        credit: 15,
        price: 1500,
        img: 'https://image.freepik.com/free-vector/cloud-internet-technology_53876-94170.jpg'

    },
    {
        id: 'BA-037',
        name: 'Bachelor Of Nursing',
        startDate: 'July 24, 2019',
        duration: '3 weeks',
        instructors: 'Jennifer Homes, John Doe',
        credit: 12,
        price: 1100,
        img: 'https://image.freepik.com/free-photo/young-asia-lady-nurse-giving-covid-19-flu-antivirus-vaccine-shot-male-patient-wear-face-mask-protection-from-virus-disease_7861-2769.jpg'

    },
    {
        id: 'BA-038',
        name: 'The Theory Of Sport',
        startDate: 'October 31, 2019',
        duration: '1 weeks',
        instructors: 'Jennifer Homes, Anthony Lee',
        credit: 3,
        price: 500,
        img: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=841&q=80'

    },
    {
        id: 'MA-045',
        name: 'Chemical Engineering',
        startDate: 'October 31, 2021',
        duration: '1 weeks',
        instructors: 'Jennifer Homes, Anthony Lee',
        credit: 15,
        price: 1650,
        img: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'

    },
    {
        id: 'MA-035',
        name: 'Work-Life Balance',
        startDate: 'August 21, 2021',
        duration: '18 months',
        instructors: 'Jennifer farnandez, Anthony Lee',
        credit: 48,
        price: 5975,
        img: 'https://images.unsplash.com/photo-1533280385001-c32ffcbd52a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'

    },
    {
        id: 'WP 123',
        name: 'Game Theory 101',
        startDate: 'June 19, 2021',
        duration: '2 weeks',
        instructors: 'John Doe, Anthony Lee',
        credit: 12,
        price: 1199,
        img: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=837&q=80'

    },
    {
        id: 'MD 5',
        name: 'Master Of Gamification',
        startDate: 'May 29, 2021',
        duration: '4 weeks',
        instructors: 'Danny Awesome, Anthony Lee',
        credit: 48,
        price: 7099,
        img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'

    },
    {
        id: 'MD 6',
        name: 'Accounting Technologies',
        startDate: 'Feb 22, 2022',
        duration: '4 weeks',
        instructors: 'Danny Awesome, Anthony Lee',
        credit: 12,
        price: 690,
        img: 'https://images.unsplash.com/photo-1501290836517-b22a21c522a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80'

    },
    {
        id: 'MD 7',
        name: 'Electrical & Electronic',
        startDate: 'March 01, 2022',
        duration: '6 weeks',
        instructors: 'Danny Joe, Anny Lee',
        credit: 15,
        price: 799,
        img: 'https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80'

    },
    {
        id: 'MD 8',
        name: 'Development Studies',
        startDate: 'March 27, 2022',
        duration: '4 weeks',
        instructors: 'Danny Joe, Anny Lee',
        credit: 12,
        price: 670,
        img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80'

    },
    {
        id: 'MDA 9',
        name: 'Computer Technologies',
        startDate: 'December 23, 2021',
        duration: '6 weeks',
        instructors: 'Lio Joe, Janny ',
        credit: 15,
        price: 895,
        img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80'

    },

]