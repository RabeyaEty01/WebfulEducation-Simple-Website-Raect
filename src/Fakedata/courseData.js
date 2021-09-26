const courseData = [
    {
        id: 'BA-039',
        name: 'Information System',
        startDate: 'March 11, 2019',
        duration: '2 weeks',
        instructors: 'Jacky Michaels, Anthony Lee',
        credit: 15,
        price: 1500.25,
        img: 'https://image.freepik.com/free-vector/cloud-internet-technology_53876-94170.jpg'

    },
    {
        id: 'BN-037',
        name: 'Bachelor Of Nursing',
        startDate: 'July 24, 2019',
        duration: '3 weeks',
        instructors: 'Jennifer Homes, John Doe',
        credit: 12,
        price: 1100.00,
        img: 'https://image.freepik.com/free-photo/young-asia-lady-nurse-giving-covid-19-flu-antivirus-vaccine-shot-male-patient-wear-face-mask-protection-from-virus-disease_7861-2769.jpg'

    },
    {
        id: 'TTS-038',
        name: 'The Theory Of Sport',
        startDate: 'October 31, 2019',
        duration: '1 weeks',
        instructors: 'Jennifer Homes, Anthony Lee',
        credit: 3,
        price: 500.12,
        img: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=841&q=80'

    },
    {
        id: 'CHE-045',
        name: 'Chemical Engineering',
        startDate: 'October 31, 2021',
        duration: '1 weeks',
        instructors: 'Jennifer Homes, Anthony Lee',
        credit: 15,
        price: 1650.98,
        img: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'

    },
    {
        id: 'WMB-035',
        name: 'Work-Life Balance',
        startDate: 'August 21, 2021',
        duration: '18 months',
        instructors: 'Jennifer farnandez, Anthony Lee',
        credit: 48,
        price: 5975.23,
        img: 'https://images.unsplash.com/photo-1533280385001-c32ffcbd52a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'

    },
    {
        id: 'GTP-123',
        name: 'Game Theory 101',
        startDate: 'June 19, 2021',
        duration: '2 weeks',
        instructors: 'John Doe, Anthony Lee',
        credit: 12,
        price: 1199.34,
        img: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=837&q=80'

    },
    {
        id: 'MOG-005',
        name: 'Master Of Gamification',
        startDate: 'May 29, 2021',
        duration: '4 weeks',
        instructors: 'Danny Awesome, Anthony Lee',
        credit: 48,
        price: 7099,
        img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'

    },
    {
        id: 'ATL-006',
        name: 'Accounting Technologies',
        startDate: 'Feb 22, 2022',
        duration: '4 weeks',
        instructors: 'Danny Awesome, Anthony Lee',
        credit: 12,
        price: 690.90,
        img: 'https://images.unsplash.com/photo-1501290836517-b22a21c522a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80'

    },
    {
        id: 'ELE-077',
        name: 'Electrical & Electronic',
        startDate: 'March 01, 2022',
        duration: '6 weeks',
        instructors: 'Danny Joe, Anny Lee',
        credit: 15,
        price: 799.87,
        img: 'https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80'

    },
    {
        id: 'DES-078',
        name: 'Development Studies',
        startDate: 'March 27, 2022',
        duration: '4 weeks',
        instructors: 'Danny Joe, Anny Lee',
        credit: 12,
        price: 670.00,
        img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80'

    },
    {
        id: 'MDA-949',
        name: 'Computer Technologies',
        startDate: 'December 23, 2021',
        duration: '6 weeks',
        instructors: 'Lio Joe, Janny ',
        credit: 15,
        price: 895.45,
        img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80'

    },
    {
        id: 'BPMA-029',
        name: 'Become a PHP Master and Make Money',
        startDate: 'December 23, 2021',
        duration: '6 weeks',
        instructors: 'Hinata Hyuga, Catty Leo ',
        credit: 15,
        price: 595.78,
        img: 'https://eduma.thimpress.com/eduma-elegant/wp-content/uploads/sites/90/2015/06/course-2.jpg'

    },
    {
        id: 'LICP-020',
        name: 'LMS Interactive Content Program',
        startDate: 'Novembar 21, 2021',
        duration: '6 weeks',
        instructors: 'Leo patty, Keny White ',
        credit: 6,
        price: 395.22,
        img: 'https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

    },
    {
        id: 'YCGP-219',
        name: 'Your Complete Guide to Photography',
        startDate: 'January 09, 2022',
        duration: '6 weeks',
        instructors: 'Leo patty, Keny White ',
        credit: 6,
        price: 399.55,
        img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'

    }

]