
const data = [
    {
        id: 1,
        name: 'Gennaria diphylla',
        rating: 5,
        isSpecial: true,
        color: 'green',
        image: 'assets/images/orchids01.jpg',
        origin: 'Macaronesia',
        category: 'Gennaria',
        info: 'Gennaria diphylla is a species of flowering plant from the orchid family, Orchidaceae, native to the region from the western Mediterranean and Macaronesia (Canary Islands, Madeira, Portugal, Spain, the Balearic Islands, Morocco, Algeria, Tunisia, Sardinia, Tuscany).Gennaria diphylla has a stem about 15–30 cm tall. The stem bears two leaves. The lower leaf is larger, 4–7 cm long and 2.5–7 cm wide. The upper leaf is considerably smaller. Both leaves are elliptical or ovate in shape, with rounded lobes at the base making it heart-shaped. The flowers are borne in a spike up to 10 cm long. They are yellowish-green and form a bell-like shape. The lip (labellum) has three lobes, the middle one being slightly longer. A spur is present'
    },
    {
        id: 2,
        name: 'Ophrys lutea',
        rating: 5,
        isSpecial: true,
        color: 'yellow',
        image: 'assets/images/orchids02.jpg',
        origin: 'Middle East',
        category: 'Ophrys',
        info: 'Ophrys lutea, the yellow bee-orchid, is a species of orchid native to southern Europe, North Africa, and the Middle East, the range extending from Portugal and Morocco to Syria. Extended petals, yellow or with a blue-grey or brown spotted velvety macula. Pollinated by male Andrena bees. This species is notable among Ophrys for the fact that the pollinating bees sit on the labellum facing away from the pollinaria instead of facing towards them, and thus collect the pollinaria with their abdomen.'
    },
    {
        id: 3,
        name: 'P.Rothschildianum',
        rating: 5,
        isSpecial: true,
        color: 'light brown',
        image: 'assets/images/orchids03.jpg',
        origin: 'Mount Kinabalu in Borneo',
        category: 'Fuchsia',
        info: 'Paphiopedilum rothschildianum, commonly known as the Gold of Kinabalu orchid or Rothschilds slipper orchid, is a large, clear-leafed species of orchid. It blooms with a tall inflorescence of up to six large flowers that are 5-13 inches. It is unique to the Corypetalum group for holding its petals almost horizontally, giving the flower a distinctive appearance. The peak flowering period of this plant is from April to May'
    },
    {
        id: 4,
        name: 'Phalaenopsis amabilis',
        rating: 5,
        isSpecial: true,
        color: 'white',
        image: 'assets/images/orchids04.jpg',
        origin: 'Indonesia',
        category: 'Orchidaceae',
        info: 'Phalaenopsis amabilis, commonly known as the moon orchid, moth orchid,[7] or mariposa orchid,[8] is a species of flowering plant in the orchid family Orchidaceae. It is widely cultivated as a decorative houseplant. It is an epiphytic or lithophytic herb with long, thick roots, between two and eight thick, fleshy leaves with their bases hiding the stem and nearly flat, white, long-lasting flowers on a branching flowering stem with up to ten flowers on each branch.'
    },
    {
        id: 5,
        name: 'Dendrobium nobile',
        rating: 5,
        isSpecial: true,
        color: 'purple',
        image: 'assets/images/orchids05.jpg',
        origin: 'China',
        category: 'Orchidaceae',
        info: 'Dendrobium nobile is a sympodial orchid that forms pseudobulbs. When the mother plants life cycle ends, it produces offsets, continuing the plants life. The new plant then repeats this cycle. Its inflorescence is erect, with blooms forming along the length of the flowering stem. It has strap-shaped, persistent leaves and blooms mostly in winter and spring, producing short, 2 to 4-flowered racemes. The flowers are fragrant, waxy, and highly variable in color, ranging from white to pink and purple. The many different cultivated varieties produce blooms of different sizes and colors'
    },
    {
        id: 6,
        name: 'Vanda coerulea',
        rating: 5,
        isSpecial: true,
        color: 'white',
        image: 'assets/images/orchids06.jpg',
        origin: 'Himalayas',
        category: 'V. coerulea',
        info: 'Vanda coerulea, commonly known as blue orchid, blue vanda or autumn ladies tresses, is a species of orchid found in Northeast India with its range extending to China (southern Yunnan). It is known as kwaklei in Manipuri and vandaar in Sanskrit. It has bluish purple flowers which are very long-lasting compared to other orchids. The plant bears up to 20 to 30 spikes.'
    },
    {
        id: 7,
        name: 'Miltonia spectabilis',
        rating: 5,
        isSpecial: true,
        color: 'white and light pink',
        image: 'assets/images/orchids07.jpg',
        origin: 'Brazil',
        category: 'Miltonia',
        info: 'Miltonia, abbreviated Milt. in the horticultural trade, is an orchid genus comprising twelve epiphyte species and eight natural hybrids. The miltonias are exclusively inhabitants of Brazil, except for one species whose range extends from Brazil into the northeast of Argentina and the east of Paraguay.'
    },
    {
        id: 8,
        name: 'Oncidium Sharry Baby',
        rating: 5,
        isSpecial: true,
        color: 'dark green',
        image: 'assets/images/orchids08.jpg',
        origin: 'Northern Mexico',
        category: 'Oncidium',
        info: 'Oncidium, abbreviated as Onc. in the horticultural trade, is a genus that, as of December 2023, contains about 340 species of orchids from the subtribe Oncidiinae of the orchid family Orchidaceae. It is distributed across tropical and subtropical America from Mexico, Central America and the West Indies to northern Argentina, with one species (O. ensatum) extending into Florida. Common names for plants in this genus include dancing-lady orchid and golden shower orchid.'
    },
    {
        id: 9,
        name: 'Cypripedium calceolus',
        rating: 5,
        isSpecial: true,
        color: 'green',
        image: 'assets/images/orchids09.jpg',
        origin: 'Europe and Asia',
        category: 'Cypripedium',
        info: ' the largest-flowered orchid species in Europe, growing to 60 cm tall with flowers as wide as 9 cm. Before it flowers, it is distinguished from other orchids by the large size and width of its ovate leaves (as big as 18 cm long, 9 cm wide), which like other orchids exhibit parallel venation. Each shoot has up to four leaves and a small number of flowers (typically one or two), which have long often twisted petals varying from red-brown to black (rarely green) and a slipper-shaped yellow labellum, within which red dots are visible. It is a long-lived perennial and spreads using horizontal stems (rhizomes)'
    },
    {
        id: 10,
        name: 'Cattleya labiata',
        rating: 5,
        isSpecial: true,
        color: 'violet',
        image: 'assets/images/orchids10.jpg',
        origin: 'Brazil',
        category: 'Cattleya',
        info: 'This plant grows in the northeastern area of Brazil, in the states of Pernambuco and Alagoas. They grow to different sizes depending on the area from which they originate. Those that are growing in Pernambuco are smaller, with small but colored flowers, with most of them being lilac. The interior part of the flower is a dark lilac color. Plants from Alagoas are bigger and have larger flowers. Some varieties, such as Cattleya labiata var. semialba, have large white flowers with a touch of yellow. There is another variety of semialba, with lilac in the inferior part of the flower. This plant is an epiphyte, growing up in trees, where light is plentiful. However, there are also many other places where this plant could grow, such as directly on rock with very little soil.'
    },
    {
        id: 11,
        name: 'Laelia purpurata',
        rating: 5,
        isSpecial: true,
        color: 'light yellow',
        image: 'assets/images/orchids11.jpg',
        origin: 'Brazil',
        category: 'Cattleya',
        info: 'Cattleya purpurata, known in the past as Laelia purpurata and Sophronitis purpurata, is native to Brazil where it is very popular among orchid growers. It is an epiphyte that is found in the canopy of tall trees near coastal areas, in the Brazilian states of Rio Grande do Sul, Santa Catarina and São Paulo. The orchid favors bright light and cool to warm conditions and is relative easy to cultive. C. purpurata has been used extensively as a parent in hybridizing with Cattleyas. Cattleya purpurata blooms from late spring to fall with three to five flowers on a spike. The flowers are long-lasting and fragrant.'
    },
    {
        id: 12,
        name: 'Masdevallia veitchiana',
        rating: 5,
        isSpecial: true,
        color: 'light red',
        image: 'assets/images/orchids12.jpg',
        origin: 'Peru',
        category: 'Masdevallia',
        info: 'The plant is found in the wild near Machu Picchu and nearby areas in Peru, where it is known as gallo-gallo, meaning "rooster" after the rooster-like red comb, crest and wattles of the flower.[1] The plant was named in honour of Harry Veitch, of the Veitch Nurseries family, by whose plant-hunters it was discovered in 1867,[2] and who imported, cultivated, and first flowered this species'
    },
    {
        id: 13,
        name: 'Caladenia alpina',
        rating: 5,
        isSpecial: true,
        color: 'white',
        image: 'assets/images/orchids13.jpg',
        origin: 'Australia',
        category: 'Orchidaceae',
        info: 'Caladenia alpina, commonly known as the mountain caladenia, is a species of plant in the orchid family Orchidaceae and is native to subalpine areas of south-eastern Australia and to New Zealand. It has a single fleshy leaf and a thin wiry flowering spike bearing two white flowers with red bars on the labellum. In New Zealand this orchid is sometimes known as Caladenia lyallii.'
    },
    {
        id: 14,
        name: 'C.flava subsp maculata',
        rating: 5,
        isSpecial: true,
        color: 'yellow',
        image: 'assets/images/orchids14.jpg',
        origin: 'Western Australia',
        category: 'Caladenia',
        info: 'Caladenia flava subsp. maculata, commonly known as the Kalbarri cowslip orchid,[2] is a species of orchid endemic to the south-west of Western Australia. It has a single, hairy leaf and up to three lemon-yellow flowers with brownish-fawn spots on some parts. It mainly occurs in near-coastal areas north of Geraldton.'
    },
    {
        id: 15,
        name: 'Caladenia fluvialis',
        rating: 5,
        isSpecial: true,
        color: 'light green',
        image: 'assets/images/orchids15.jpg',
        origin: 'Western Australia',
        category: 'Caladenia',
        info: 'Caladenia fluvialis, commonly known as the Brookton Highway spider orchid is a species of orchid endemic to the south-west of Western Australia. It is a recently discovered orchid with a single hairy leaf and one or two cream-yellow flowers with red markings on the labellum.'
    },
    {
        id: 16,
        name: 'Caladenia plicata',
        rating: 5,
        isSpecial: true,
        color: 'red,yellow,pale green',
        image: 'assets/images/orchids16.jpg',
        origin: 'Western Australia',
        category: 'Caladenia',
        info: 'Caladenia plicata, commonly known as the crab-lipped spider orchid, is a species of orchid endemic to the south-west of Western Australia. It has a single hairy leaf and one or two red, yellow and pale green flowers with an unusual labellum which vibrates in the slightest breeze.'
    },
]

export default data