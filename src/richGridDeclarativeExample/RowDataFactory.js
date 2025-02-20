import RefData from './RefData';

export default class RowDataFactory {
    createRowData() {
        return Array.from({ length: 20 }, (_, index) => ({
            row: index + 1,
            client: `Cliente ${index + 1}`,
            erp: `ERP ${index + 1}`,
            analista: `Analista ${index + 1}`,
            lojas: Math.floor(Math.random() * 100),
            cadastrados: Math.floor(Math.random() * 100),
            novos: Math.floor(Math.random() * 100),
            nomesDiferentes: Math.floor(Math.random() * 100),
            comDivergence: Math.floor(Math.random() * 100),
            pendentes: Math.floor(Math.random() * 100),
            aguardandoSinc: Math.floor(Math.random() * 100),
            acao: "🔴 🟢"
        }));
    }
}


// export default class RowDataFactory {

//     createRowData() {
//         const rowData = [];

//         for (let i = 0; i < 200; i++) {
//             const countryData = RefData.COUNTRIES[i % RefData.COUNTRIES.length];
//             rowData.push({
//                 name: RefData.FIRST_NAMES[i % RefData.FIRST_NAMES.length] + ' ' + RefData.LAST_NAMES[i % RefData.LAST_NAMES.length],
//                 skills: {
//                     android: Math.random() < 0.4,
//                     html5: Math.random() < 0.4,
//                     mac: Math.random() < 0.4,
//                     windows: Math.random() < 0.4,
//                     css: Math.random() < 0.4
//                 },
//                 dob: RefData.DOB[i % RefData.DOB.length],
//                 address: RefData.ADDRESSES[i % RefData.ADDRESSES.length],
//                 years: Math.round(Math.random() * 100),
//                 proficiency: Math.round(Math.random() * 100),
//                 country: countryData.country,
//                 continent: countryData.continent,
//                 language: countryData.language,
//                 mobile: this.createRandomPhoneNumber(),
//                 landline: this.createRandomPhoneNumber()
//             });
//         }

//         return rowData;
//     }

//     createRandomPhoneNumber() {
//         let result = '+';
//         for (let i = 0; i < 12; i++) {
//             result += Math.round(Math.random() * 10);
//             if (i === 2 || i === 5 || i === 8) {
//                 result += ' ';
//             }
//         }
//         return result;
//     }

// }