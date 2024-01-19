export const defaultFoodImg = 'https://res.cloudinary.com/sweetgreen/image/upload/f_webp,q_auto:good/dpr_2/c_crop,h_0.6,w_0.4/w_310/v1702673472/gravy/production/Gravy::MasterProduct/SG_OLO_BBQSalmonPlate_3600x2400_1_don3ur';
export const defaultStoreImg = 'https://res.cloudinary.com/sweetgreen/image/upload/f_webp,q_auto:good,dpr_2,h_200,c_fill/v1657914912/gravy/production/Gravy::Restaurant/5th_and_Grand_1_ptubiw';
export const mockRestaurants = [
    {
        address: '601 W 5th St, Los Angeles, CA 90071',
        hours: 'Mon - Fri 10:30am - 8:00pm',
        phone: '213-279-6900',
        storeId: 880,
        storeName: 'Chicken 5th + Grand',
        menu: [
            {
                id: '100',
                name: 'BBQ Chicken',
                price: 1595,
                calories: 860
            },
            {
                id: '101',
                name: 'Miso Glazed Chicken',
                price: 1595,
                calories: 850
            },
            {
                id: '103',
                name: 'Spicy Chicken',
                price: 1595,
                calories: 840
            },
        ],

    },
    {
        address: '410 West 8th St, Los Angeles, CA 90014',
        hours: 'Mon - Sun 10:30am - 9:00pm',
        phone: '213-894-9800',
        storeId: 990,
        storeName: 'Salmon 8th + Hill',
        menu: [
            {
                id: '200',
                name: 'BBQ Salmon',
                price: 1695,
                calories: 790
            },
            {
                id: '201',
                name: 'Miso Glazed Salmon',
                price: 1695,
                calories: 860
            },
            {
                id: '203',
                name: 'Spicy Salmon',
                price: 1695,
                calories: 855
            },
        ]
    }

];