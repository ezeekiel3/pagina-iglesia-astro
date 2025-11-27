const sectionsData = [
    {
        title: 'Estudios del Nuevo Testamento',
        description: 'Profundiza en las enseñanzas y mensajes del Nuevo Testamento',
        emoji: '📖',
        content: [
            {
                id: 'evangelio',
                name: 'Los Cuatro Evangelios',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01 Lucas 1:1-4',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2001.pdf',
                    },
                    {
                        versiculo: '02 Lucas 1:1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2002.pdf',
                    },
                    {
                        versiculo: '03 Mateo 1:1-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2003.pdf',
                    },
                    {
                        versiculo: '04 Lucas 1:5-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2004.pdf',
                    },
                    {
                        versiculo: '05. Lucas 1:26-38',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2005.pdf',
                    },
                    {
                        versiculo: '06. Lucas 1:39-56',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2006.pdf',
                    },
                    {
                        versiculo: '07. Lucas 1:57-80',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2007.pdf',
                    },
                    {
                        versiculo: '08. Mateo 1:18-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2008.pdf',
                    },
                    {
                        versiculo: '09. Lucas 2:1-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2009.pdf',
                    },
                    {
                        versiculo: '10. Mateo 2:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2010.pdf',
                    },
                    {
                        versiculo: '11. Lucas 2:21-38',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2011.pdf',
                    },
                    {
                        versiculo: '12. Mateo 2:13-23',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2012.pdf',
                    },
                    {
                        versiculo: '13. Lucas 2:39-52',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2013.pdf',
                    },
                    {
                        versiculo: '14. Marcos 1-6; Mateo 3:1-9; Lucas 3:1-8',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2014.pdf',
                    },
                    {
                        versiculo: '15. Marcos 1:7-8; Mateo 3:10-12; Lucas 3:9-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2015.pdf',
                    },
                    {
                        versiculo: '16. Juan 1:14-28',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2016.pdf',
                    },
                    {
                        versiculo: '17. Juan 1:29-34; Mateo 3:13-17; Marcos 1:9-11; Lucas: 3:21-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2017.pdf',
                    },
                    {
                        versiculo: '18. Mateo 4:1-11; Marcos 1:12-13; Lucas 4:1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2018.pdf',
                    },
                    {
                        versiculo: '19. Lucas 4:14-15 y 4:31-37; Mateo 4:12-17; Marcos 1:14-15 y 1:21-28',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2019.pdf',
                    },
                    {
                        versiculo: '20. Mateo 4:18-22; Marcos 1:16-20; Lucas 5:1-11; Juan 1:35-51',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2020.pdf',
                    },
                    {
                        versiculo: '21. Juan 2:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2021.pdf',
                    },
                    {
                        versiculo: '22. Lucas 4:38-44; Mateo 8:14-17; 4:23-25; Marcos 1:29-31 y 1:35-39',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2022.pdf',
                    },
                    {
                        versiculo: '23. Lucas 5:12-16; Mateo 8:1-4; Marcos 1:40-45',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2023.pdf',
                    },
                    {
                        versiculo: '24. Lucas 5:17-26; Mateo 9:1-8; Marcos 2:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2024.pdf',
                    },
                    {
                        versiculo: '25. Mateo 9:9-13; Marcos 2:13-17; Lucas 5:27-32',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2025.pdf',
                    },
                    {
                        versiculo: '26. Mateo 9:14-17; Marcos 2:18-22; Lucas 5:33-39',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2026.pdf',
                    },
                    {
                        versiculo: '27. Mateo 12:1-8; Marcos 2:23-28; Lucas 6:1-5',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2027.pdf',
                    },
                    {
                        versiculo: '28. Mateo 12:9-14; Marcos 3:1-6; Lucas 6:6-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2028.pdf',
                    },
                    {
                        versiculo: '29. Mateo 9:35 al 10:4; Marcos 3:13-19; Lucas 6:12-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2029.pdf',
                    },
                    {
                        versiculo: '30. Mateo 5:1-12; Lucas 6:20-26',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2030.pdf',
                    },
                    {
                        versiculo: '31. Mateo 5:13-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2031.pdf',
                    },
                    {
                        versiculo: '32. Mateo 5: 21-30',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2032.pdf',
                    },
                    {
                        versiculo: '33. Mateo 5:31-48',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2033.pdf',
                    },
                    {
                        versiculo: '34. Mateo 6:1-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2034.pdf',
                    },
                    {
                        versiculo: '35. Mateo 6:19-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2035.pdf',
                    },
                    {
                        versiculo: '36. Mateo 6:25-34',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2036.pdf',
                    },
                    {
                        versiculo: '37. Mateo 7:1-12, Lucas 5:11-13 y 6:37-42',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2037.pdf',
                    },
                    {
                        versiculo: '38. Mateo 7:13-23, Lucas 13:22-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2038.pdf',
                    },
                    {
                        versiculo: '39. Mateo 7:24-29; Lucas 6:46-49',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2039.pdf',
                    },
                    {
                        versiculo: '40. Mateo 8:5-13; Lucas 7:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2040.pdf',
                    },
                    {
                        versiculo: '41. Lucas 7:11-17 y 9:57-62; Mateo 8:18-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2041.pdf',
                    },
                    {
                        versiculo: '42. Mateo 8:23-34; Marcos 4:35 al 5:20; Lucas 8:22-39',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2042.pdf',
                    },
                    {
                        versiculo: '43. Mateo 9:18-26; Marcos 5:21-43; Lucas 8:40-56',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2043.pdf',
                    },
                    {
                        versiculo: '44. Mateo 9:27-34; Lucas 8:1-3',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2044.pdf',
                    },
                    {
                        versiculo: '45. Mateo 11:1-19; Lucas 7:18-35',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2045.pdf',
                    },
                    {
                        versiculo: '46. Lucas 7:36-50',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2046.pdf',
                    },
                    {
                        versiculo: '47. Mateo 13:1-9; 18-23; Marcos 4:1-20; Lucas 8:4-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2047.pdf',
                    },
                    {
                        versiculo: '48. Marcos 4:21-34; Lucas 8:16-18 y 13:18-19; Mateo 13: 31-32',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2048.pdf',
                    },
                    {
                        versiculo: '49. Mateo 13:24-30; 33; 36-52; Lucas 13:20-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2049.pdf',
                    },
                    {
                        versiculo: '50. Mateo 10:5-15; Marcos 6:7-13; Lucas 9:1-6',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2050.pdf',
                    },
                    {
                        versiculo: '51. Mateo 13:53-58; Marcos 6:1-6; Lucas 4:16-30',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2051.pdf',
                    },
                    {
                        versiculo: '52. Mateo 12:15-21; 14:34-36; Marcos 3:7-12; 6:53-56; 7:31-37',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2052.pdf',
                    },
                    {
                        versiculo: '53. Mateo 14:1-12: Marcos 6:14-29;Lucas 9:7-9; Juan 6:1-4',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2053.pdf',
                    },
                    {
                        versiculo: '54. Mateo 14:15-21: Marcos 6:35-44',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2054.pdf',
                    },
                    {
                        versiculo: '55. Mateo 14:22-33: Marcos 6:45-52;Lucas 9:12-17; Juan 6:5-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2055.pdf',
                    },
                    {
                        versiculo: '56. Juan 6:22-35',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2056.pdf',
                    },
                    {
                        versiculo: '57. Juan 6:36-71',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2057.pdf',
                    },
                    {
                        versiculo: '58. Mateo 15:1-20; Marcos 7:1-23',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2058.pdf',
                    },
                    {
                        versiculo: '59. Mateo 15:21-28; Marcos 7:24-30',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2059.pdf',
                    },
                    {
                        versiculo: '60. Mateo 10:16-33; Lucas 12:2-9',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2060.pdf',
                    },
                    {
                        versiculo: '61. Mateo 10: 34-42; Lucas 12:49-53; 14:26-27; 12:13-21; Marcos 9:41',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2061.pdf',
                    },
                    {
                        versiculo: '62. Mateo 15:29-39; 16:1-12; Marcos 8:1-21; Lucas 12:54-56',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2062.pdf',
                    },
                    {
                        versiculo: '63. Mateo 16:13-28; Marcos 8:27-9:1; Lucas 9:18-27',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2063.pdf',
                    },
                    {
                        versiculo: '64. Mateo 17:1-21; Marcos 9:2-29; Lucas 9:28-43',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2064.pdf',
                    },
                    {
                        versiculo: '65. Mateo 12: 22-37; Marcos 3:20-30; Lucas 11:14-23',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2065.pdf',
                    },
                    {
                        versiculo: '66. Mateo 12:38-50; Marcos 3:31-35; Lucas 11:24-31 y 8:19-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2066.pdf',
                    },
                    {
                        versiculo: '67. Mateo 11:20-30; Lucas 10:13-16; 21-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2067.pdf',
                    },
                    {
                        versiculo: '68. Mateo 17:22-27; 18:1-5; Marcos 9:30-41; Lucas 9:43-50',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2068.pdf',
                    },
                    {
                        versiculo: '69. Mateo 18:6-9; Marcos 9:42-48; Lucas 17:1-2',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2069.pdf',
                    },
                    {
                        versiculo: '70. Mateo 18:15-35',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2070.pdf',
                    },
                    {
                        versiculo: '71. Mateo 19:1-12; Marcos 10:1-12; Lucas 16:18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2071.pdf',
                    },
                    {
                        versiculo: '72. Mateo 19:13-30; Marcos 10:13-31; Lucas 18:15-30',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2072.pdf',
                    },
                    {
                        versiculo: '73. Lucas 9:51-56; 10:1-11; 17-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2073.pdf',
                    },
                    {
                        versiculo: '74. Lucas 10:25-42',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2074.pdf',
                    },
                    {
                        versiculo: '75. Lucas 12:35-48; Mateo 24:45-51',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2075.pdf',
                    },
                    {
                        versiculo: '76. Lucas 13:1-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2076.pdf',
                    },
                    {
                        versiculo: '77. Mateo 20:17-27; Marcos 10:32-45; Lucas 18:31-34',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2077.pdf',
                    },
                    {
                        versiculo: '78. Mateo 20:1-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2078.pdf',
                    },
                    {
                        versiculo: '79. Lucas 14:1-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2079.pdf',
                    },
                    {
                        versiculo: '80. Lucas 14:25-33',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2080.pdf',
                    },
                    {
                        versiculo: '81. Lucas 15:8-32',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2081.pdf',
                    },
                    {
                        versiculo: '82. Lucas 16:1-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2082.pdf',
                    },
                    {
                        versiculo: '83. Lucas 16:16-31',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2083.pdf',
                    },
                    {
                        versiculo: '84. Lucas 17:5-19; 18:1-8',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2084.pdf',
                    },
                    {
                        versiculo: '85. Lucas 18:9-14; 19:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2085.pdf',
                    },
                    {
                        versiculo: '86. Juan 3:1-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2086.pdf',
                    },
                    {
                        versiculo: '87. Juan 3:22-36',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2087.pdf',
                    },
                    {
                        versiculo: '88. Juan 4:1-42',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2088.pdf',
                    },
                    {
                        versiculo: '89. Juan 4:43-54; 5:1-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2089.pdf',
                    },
                    {
                        versiculo: '90. Juan 5:19-47',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2090.pdf',
                    },
                    {
                        versiculo: '91. Juan 7: 1-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2091.pdf',
                    },
                    {
                        versiculo: '92. Juan 7: 25-52',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2092.pdf',
                    },
                    {
                        versiculo: '93. Juan 7:53; 8:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2093.pdf',
                    },
                    {
                        versiculo: '94. Juan 8:12-36',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2094.pdf',
                    },
                    {
                        versiculo: '95. Juan 8:37-59',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2095.pdf',
                    },
                    {
                        versiculo: '96. Juan 9:1-41',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2096.pdf',
                    },
                    {
                        versiculo: '97. Juan 10:1-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2097.pdf',
                    },
                    {
                        versiculo: '98. Juan 10:22-42',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2098.pdf',
                    },
                    {
                        versiculo: '99. Juan 11:1-45',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%2099.pdf',
                    },
                    {
                        versiculo: '100. Mateo 20:29-34; Marcos 10:46-52; Lucas 18:35-43',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20100.pdf',
                    },
                    {
                        versiculo: '101. Mateo 21:1-11; Marcos 11:1-11; Lucas 19:28-40; Juan 12:12-19',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20101.pdf',
                    },
                    {
                        versiculo: '102. Mateo 21:12-22; Marcos 11:15-19; Lucas 19:45-48; Juan 2:13-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20102.pdf',
                    },
                    {
                        versiculo: '103. Mateo 21:18-27; Marcos 11:12-14; 20-26; 27-33 Lucas 20:1-8',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20103.pdf',
                    },
                    {
                        versiculo: '104. Mateo 21:28-46; Marcos 12:1-12; Lucas 20:9-19',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20104.pdf',
                    },
                    {
                        versiculo: '105. Mateo 22:1-22; Marcos 12:13-17; Lucas 20:19-26',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20105.pdf',
                    },
                    {
                        versiculo: '106. Mateo 22:23-40; Marcos 12:18-34; Lucas 20:27-40',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20106.pdf',
                    },
                    {
                        versiculo: '107. Mateo 22:41-46; Marcos 12:35-37; Lucas 20:41-44',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20107.pdf',
                    },
                    {
                        versiculo: '108. Mateo 23:16-36; Lucas 11:37-54',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20108.pdf',
                    },
                    {
                        versiculo: '109. Mateo 23:37-39; Marcos 12:41-44; Lucas 13:31-35; 14:1-6; 21:1-4; 22:24-30',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20109.pdf',
                    },
                    {
                        versiculo: '110. Mateo 24:1-19; Marcos 13:1-17; Lucas 21:5-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20110.pdf',
                    },
                    {
                        versiculo: '111. Mateo 24:20-44; Marcos 13:18-37 Lucas 17: 24 -30; Lucas 21:25-38',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20111.pdf',
                    },
                    {
                        versiculo: '112. Mateo 25:1-46',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20112.pdf',
                    },
                    {
                        versiculo: '113. Mateo 26:1-16; Marcos 14:1-11; Lucas 22:1-6; Juan 11:45 a 12:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20113.pdf',
                    },
                    {
                        versiculo: '114. Juan 12:20-50',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20114.pdf',
                    },
                    {
                        versiculo: '115. Juan 13:1-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20115.pdf',
                    },
                    {
                        versiculo: '116. Mateo 26:17-29; Marcos 14:12-25; Lucas 22:7-23; Juan 13:21-30',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20116.pdf',
                    },
                    {
                        versiculo: '117. Mateo 26:30-35; Marcos 14:26-31; Lucas 22:31-38; Juan 13:31-38',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20117.pdf',
                    },
                    {
                        versiculo: '118. Juan 14:1-31',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20118.pdf',
                    },
                    {
                        versiculo: '119. Juan 15:1-27',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20119.pdf',
                    },
                    {
                        versiculo: '120. Juan 16:1-33',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20120.pdf',
                    },
                    {
                        versiculo: '121. Juan 17:1-26',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%201121.pdf',
                    },
                    {
                        versiculo: '122. Mateo 26:36-42; Marcos 14:32-42; Lucas 22:39-46',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20122.pdf',
                    },
                    {
                        versiculo: '123. Mateo 26:47-68; Marcos 14:43-65; Lucas 22:47-53; 66-71; Juan 18:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20123.pdf',
                    },
                    {
                        versiculo: '124. Mateo 26:69-75; 27:3-10 Marcos 14:66-72; Lucas 22:54-65; Juan 18:12-27',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20124.pdf',
                    },
                    {
                        versiculo: '125. Mateo 27:1-2; 11-14; Marcos 15:1-5; Lucas 23:1-12; Juan 18:28-38',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20125.pdf',
                    },
                    {
                        versiculo: '126. Mateo 27:32-50; Marcos 15:21-41; Lucas 23:26-49; Juan 19:17-30',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20126.pdf',
                    },
                    {
                        versiculo: '127. Mateo 27:51-66; Marcos 15:38-47; Lucas 23:47-56; Juan 19:31-42',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20127.pdf',
                    },
                    {
                        versiculo: '128. Mateo 27:62-66; 28:1-15; Marcos 16:1-8; Lucas 24:1-12; Juan 20:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20128.pdf',
                    },
                    {
                        versiculo: '129. Lucas 24:13-35',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20129.pdf',
                    },
                    {
                        versiculo: '130. Marcos 16:9-13; Lucas 24:36-49; Juan 20:11-52',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20130.pdf',
                    },
                    {
                        versiculo: '131. Juan 20:24-31; Juan 21:1-19',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20131.pdf',
                    },
                    {
                        versiculo: '132. Mateo 28:16-20; Marcos 16:14-20; Lucas 24:50-53; Juan 21:20-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/4%20Evangelios%20132.pdf',
                    },
                ],
            },
            {
                id: 'hechos',
                name: 'Hechos',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01 Hechos 1:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_01.pdf',
                    },
                    {
                        versiculo: '02 Hechos 1:12-26',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_02.pdf',
                    },
                    {
                        versiculo: '03. Hechos 2: 1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_03.pdf',
                    },
                    {
                        versiculo: '04. Hechos 2: 14-40',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_04.pdf',
                    },
                    {
                        versiculo: '05. Hechos 2: 41-47',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_05.pdf',
                    },
                    {
                        versiculo: '06. Hechos 3: 1-26',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_06.pdf',
                    },
                    {
                        versiculo: '07. Hechos 4: 1-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_07.pdf',
                    },
                    {
                        versiculo: '08. Hechos 4:23-31',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_08.pdf',
                    },
                    {
                        versiculo: '09. Hechos 4: 32 al 5:11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_09.pdf',
                    },
                    {
                        versiculo: '10. Hechos 5:12-32',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_10.pdf',
                    },
                    {
                        versiculo: '11. Hechos 5:33-42',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_11.pdf',
                    },
                    {
                        versiculo: '12. Hechos 6:1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_12.pdf',
                    },
                    {
                        versiculo: '13. Hechos 6:8-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_13.pdf',
                    },
                    {
                        versiculo: '14. Hechos 7:1-8',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_14.pdf',
                    },
                    {
                        versiculo: '15. Hechos 7: 9-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_15.pdf',
                    },
                    {
                        versiculo: '16. Hechos 7: 17-43',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_16.pdf',
                    },
                    {
                        versiculo: '17. Hechos 7: 44-50',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_17.pdf',
                    },
                    {
                        versiculo: '18. Hechos 7: 51-60',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_18.pdf',
                    },
                    {
                        versiculo: '19. Hechos 8: 1-4',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_19.pdf',
                    },
                    {
                        versiculo: '20. Hechos 8: 5-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_20.pdf',
                    },
                    {
                        versiculo: '21. Hechos 8: 14-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_21.pdf',
                    },
                    {
                        versiculo: '22. Hechos 8: 26-40',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_22.pdf',
                    },
                    {
                        versiculo: '23. Hechos 9:1-9',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_23.pdf',
                    },
                    {
                        versiculo: '24. Hechos 9:10-19',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_24.pdf',
                    },
                    {
                        versiculo: '25. Hechos 9: 20-31',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_25.pdf',
                    },
                    {
                        versiculo: '26. Hechos 9: 32-43',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_26.pdf',
                    },
                    {
                        versiculo: '27. Hechos 10: 1-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_27.pdf',
                    },
                    {
                        versiculo: '28. Hechos 10: 25-48',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_28.pdf',
                    },
                    {
                        versiculo: '29. Hechos 11: 1-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_29.pdf',
                    },
                    {
                        versiculo: '30. Hechos 11: 19-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_30.pdf',
                    },
                    {
                        versiculo: '31. Hechos 11: 25-30',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_31.pdf',
                    },
                    {
                        versiculo: '32. Hechos 12: 1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_32.pdf',
                    },
                    {
                        versiculo: '33. Hechos 12: 8-19',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_33.pdf',
                    },
                    {
                        versiculo: '34. Hechos 12: 20-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_34.pdf',
                    },
                    {
                        versiculo: '35. Hechos 12: 25; 13:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_35.pdf',
                    },
                    {
                        versiculo: '36. Hechos 13: 13-42',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_36.pdf',
                    },
                    {
                        versiculo: '37. Hechos 13: 43-52',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_37.pdf',
                    },
                    {
                        versiculo: '38. Hechos 14: 1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_38.pdf',
                    },
                    {
                        versiculo: '39. Hechos 14: 8-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_39.pdf',
                    },
                    {
                        versiculo: '40. Hechos 14: 21-28',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_40.pdf',
                    },
                    {
                        versiculo: '41. Hechos 15:1-5',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_41.pdf',
                    },
                    {
                        versiculo: '42. Hechos 15: 6-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_42.pdf',
                    },
                    {
                        versiculo: '43. Hechos 15: 13-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_43.pdf',
                    },
                    {
                        versiculo: '44. Hechos 15:22-35',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_44.pdf',
                    },
                    {
                        versiculo: '45. Hechos 15:36 al 16:5',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_45.pdf',
                    },
                    {
                        versiculo: '46. Hechos 16:6-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_46.pdf',
                    },
                    {
                        versiculo: '47. Hechos 16:11-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_47.pdf',
                    },
                    {
                        versiculo: '48. Hechos 16:16-40',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_48.pdf',
                    },
                    {
                        versiculo: '49. Hechos 17:1-9',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_49.pdf',
                    },
                    {
                        versiculo: '50. Hechos 17:10-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_50.pdf',
                    },
                    {
                        versiculo: '51. Hechos 17:16-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_51.pdf',
                    },
                    {
                        versiculo: '52. Hechos 17:22-34',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_52.pdf',
                    },
                    {
                        versiculo: '53. Hechos 18:1-6',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_53.pdf',
                    },
                    {
                        versiculo: '54. Hechos 18:7-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_54.pdf',
                    },
                    {
                        versiculo: '55. Hechos 18:12-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_55.pdf',
                    },
                    {
                        versiculo: '56. Hechos 18:22-28',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_56.pdf',
                    },
                    {
                        versiculo: '57. Hechos 19:1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_57.pdf',
                    },
                    {
                        versiculo: '58. Hechos 19: 8-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_58.pdf',
                    },
                    {
                        versiculo: '59. Hechos 19:21-41',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_59.pdf',
                    },
                    {
                        versiculo: '60. Hechos 20:1-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_60.pdf',
                    },
                    {
                        versiculo: '61. Hechos 20:17-27',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_61.pdf',
                    },
                    {
                        versiculo: '62. Hechos 20:28-38',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_62.pdf',
                    },
                    {
                        versiculo: '63. Hechos 21:1-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_63.pdf',
                    },
                    {
                        versiculo: '64. Hechos 21:17-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_64.pdf',
                    },
                    {
                        versiculo: '65. Hechos 21:26-40 al 22: 1-2a',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_65.pdf',
                    },
                    {
                        versiculo: '66. Hechos 22:2b-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_66.pdf',
                    },
                    {
                        versiculo: '67. Hechos 22:17-29',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_67.pdf',
                    },
                    {
                        versiculo: '68. Hechos 22:30 al 23: 11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_68.pdf',
                    },
                    {
                        versiculo: '69. Hechos 23: 12-35',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_69.pdf',
                    },
                    {
                        versiculo: '70. Hechos 24:1-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_70.pdf',
                    },
                    {
                        versiculo: '71. Hechos 24:23 al 25: 12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_71.pdf',
                    },
                    {
                        versiculo: '72. Hechos 25:13 al 26:3',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_72.pdf',
                    },
                    {
                        versiculo: '73. Hechos 26:4-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_73.pdf',
                    },
                    {
                        versiculo: '74. Hechos 26:19-32',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_74.pdf',
                    },
                    {
                        versiculo: '75. Hechos 27:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_75.pdf',
                    },
                    {
                        versiculo: '76. Hechos 27: 13-26',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_76.pdf',
                    },
                    {
                        versiculo: '77. Hechos 27:27-38',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_77.pdf',
                    },
                    {
                        versiculo: '78. Hechos 27:39-44 al 28:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_78.pdf',
                    },
                    {
                        versiculo: '79. Hechos 28:11-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_79.pdf',
                    },
                    {
                        versiculo: '80. Hechos 28:17-31',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Hechos_80.pdf',
                    },
                ],
            },
            {
                id: 'romanos',
                name: 'Romanos',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Romanos 1:1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%201.pdf',
                    },
                    {
                        versiculo: '02. Romanos 1:8-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%202.pdf',
                    },
                    {
                        versiculo: '03. Romanos 1:16-32',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%203.pdf',
                    },
                    {
                        versiculo: '04. Romanos 2:1-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%204.pdf',
                    },
                    {
                        versiculo: '05. Romanos 2:17-29',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%205.pdf',
                    },
                    {
                        versiculo: '06. Romanos 3:1-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%206.pdf',
                    },
                    {
                        versiculo: '07. Romanos 3:21-31',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%207.pdf',
                    },
                    {
                        versiculo: '08. Romanos 4:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%208.pdf',
                    },
                    {
                        versiculo: '09. Romanos 4:13-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%209.pdf',
                    },
                    {
                        versiculo: '10. Romanos 5:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2010.pdf',
                    },
                    {
                        versiculo: '11. Romanos 5:12-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2011.pdf',
                    },
                    {
                        versiculo: '12. Romanos 6:1-14',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2012.pdf',
                    },
                    {
                        versiculo: '13. Romanos 6:15-23',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2013.pdf',
                    },
                    {
                        versiculo: '14. Romanos 7:1-6',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2014.pdf',
                    },
                    {
                        versiculo: '15. Romanos 7:7-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2015.pdf',
                    },
                    {
                        versiculo: '16. Romanos 8:1-14',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2016.pdf',
                    },
                    {
                        versiculo: '17. Romanos 8:15-27',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2017.pdf',
                    },
                    {
                        versiculo: '18. Romanos 8:28-39',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2018.pdf',
                    },
                    {
                        versiculo: '19. Romanos 9:1-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2019.pdf',
                    },
                    {
                        versiculo: '20. Romanos 9:17-33',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2020.pdf',
                    },
                    {
                        versiculo: '21. Romanos 10:1-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2021.pdf',
                    },
                    {
                        versiculo: '22. Romanos 10:16 al 11:15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2022.pdf',
                    },
                    {
                        versiculo: '23. Romanos 11:16-35',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2023.pdf',
                    },
                    {
                        versiculo: '24. Romanos 12:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2024.pdf',
                    },
                    {
                        versiculo: '25. Romanos 12:11-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2025.pdf',
                    },
                    {
                        versiculo: '26. Romanos 13:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2026.pdf',
                    },
                    {
                        versiculo: '27. Romanos 13:11-14 al 14:1-9',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2027.pdf',
                    },
                    {
                        versiculo: '28. Romanos 14:10-23',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2028.pdf',
                    },
                    {
                        versiculo: '29. Romanos 15:1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2029.pdf',
                    },
                    {
                        versiculo: '30. Romanos 15:14-33',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2030.pdf',
                    },
                    {
                        versiculo: '31. Romanos 16:1-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2031.pdf',
                    },
                    {
                        versiculo: '32. Romanos 16:17-27',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Romanos%2032.pdf',
                    },
                ],
            },
            {
                id: 'corintios',
                name: 'Cartas de los Corintios',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. 1° Corintios 1: 1-9',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_01.pdf',
                    },
                    {
                        versiculo: '02. 1° Corintios 1: 10-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_02.pdf',
                    },
                    {
                        versiculo: '03. 1° Corintios 1: 18-31',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_03.pdf',
                    },
                    {
                        versiculo: '04. 1° Corintios 2: 1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_04.pdf',
                    },
                    {
                        versiculo: '05. 1° Corintios 2: 11-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_05.pdf',
                    },
                    {
                        versiculo: '06. 1° Corintios 3: 1-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_06.pdf',
                    },
                    {
                        versiculo: '07. 1° Corintios 3: 16-23 al 4:1-2',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_07.pdf',
                    },
                    {
                        versiculo: '08. 1° Corintios 4:3-8',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_08.pdf',
                    },
                    {
                        versiculo: '09. 1° Corintios 4: 9-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_09.pdf',
                    },
                    {
                        versiculo: '10. 1° Corintios 4: 17-21 al 5:1-5',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_10.pdf',
                    },
                    {
                        versiculo: '11. 1° Corintios 5:6-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_11.pdf',
                    },
                    {
                        versiculo: '12. 1° Corintios 6: 1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_12.pdf',
                    },
                    {
                        versiculo: '13. 1° Corintios 6: 12-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_13.pdf',
                    },
                    {
                        versiculo: '14. 1° Corintios 7: 1-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_14.pdf',
                    },
                    {
                        versiculo: '15. 1° Corintios 7: 17-31',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_15.pdf',
                    },
                    {
                        versiculo: '16. 1° Corintios 7: 32-40',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_16.pdf',
                    },
                    {
                        versiculo: '17. 1° Corintios 8: 1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_17.pdf',
                    },
                    {
                        versiculo: '18. 1° Corintios 9: 1-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_18.pdf',
                    },
                    {
                        versiculo: '19. 1° Corintios 9: 16-27',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_19.pdf',
                    },
                    {
                        versiculo: '20. 1° Corintios 10: 1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_20.pdf',
                    },
                    {
                        versiculo: '21. 1° Corintios 10: 14-33 al 11:1',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_21.pdf',
                    },
                    {
                        versiculo: '22. 1° Corintios 11: 2-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_22.pdf',
                    },
                    {
                        versiculo: '23. 1° Corintios 11: 17-34',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_23.pdf',
                    },
                    {
                        versiculo: '24. 1° Corintios 12: 1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_24.pdf',
                    },
                    {
                        versiculo: '25. 1° Corintios 12: 14-31',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_25.pdf',
                    },
                    {
                        versiculo: '26. 1° Corintios 13: 1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_26.pdf',
                    },
                    {
                        versiculo: '27. 1° Corintios 14: 1-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_27.pdf',
                    },
                    {
                        versiculo: '28. 1° Corintios 14: 26-40',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_28.pdf',
                    },
                    {
                        versiculo: '29. 1° Corintios 15:1-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_29.pdf',
                    },
                    {
                        versiculo: '30. 1° Corintios 15: 22-41',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_30.pdf',
                    },
                    {
                        versiculo: '31. 1° Corintios 15: 42-58',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_31.pdf',
                    },
                    {
                        versiculo: '32. 1° Corintios 16: 1-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_Corintios_32.pdf',
                    },
                    {
                        versiculo: '01. 2° Corintios 1:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_1.pdf',
                    },
                    {
                        versiculo: '02. 2° Corintios 1:12-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_2.pdf',
                    },
                    {
                        versiculo: '03. 2° Corintios 1:23 al 2:11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_3.pdf',
                    },
                    {
                        versiculo: '04. 2° Corintios 2:12-17 al 3:1-3',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_4.pdf',
                    },
                    {
                        versiculo: '05. 2° Corintios 3:4-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_5.pdf',
                    },
                    {
                        versiculo: '06. 2° Corintios 4:1-6',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_6.pdf',
                    },
                    {
                        versiculo: '07. 2° Corintios 4:7-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_7.pdf',
                    },
                    {
                        versiculo: '08. 2° Corintios 5:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_8.pdf',
                    },
                    {
                        versiculo: '09. 2° Corintios 5:11-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_9.pdf',
                    },
                    {
                        versiculo: '10. 2° Corintios 6:1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_10.pdf',
                    },
                    {
                        versiculo: '11. 2° Corintios 6:14-18 al 7:1-4',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_11.pdf',
                    },
                    {
                        versiculo: '12. 2° Corintios 7:5-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_12.pdf',
                    },
                    {
                        versiculo: '13. 2° Corintios 8:1-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_13.pdf',
                    },
                    {
                        versiculo: '14. 2° Corintios 8:16-24 al 9:1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_14.pdf',
                    },
                    {
                        versiculo: '15. 2° Corintios 9:8-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_15.pdf',
                    },
                    {
                        versiculo: '16. 2° Corintios 10:1-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_16.pdf',
                    },
                    {
                        versiculo: '17. 2° Corintios 11:1-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_17.pdf',
                    },
                    {
                        versiculo: '18. 2° Corintios 11:16-33',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_18.pdf',
                    },
                    {
                        versiculo: '19. 2° Corintios 12:1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_19.pdf',
                    },
                    {
                        versiculo: '20. 2° Corintios 12:14-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_20.pdf',
                    },
                    {
                        versiculo: '21. 2° Corintios 13:1-14',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Corintios_21.pdf',
                    },
                ],
            },
            {
                id: 'galatas',
                name: 'Galatas',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Gálatas 1:1-5',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_1.pdf',
                    },
                    {
                        versiculo: '02. Gálatas 1:6-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_2.pdf',
                    },
                    {
                        versiculo: '03. Gálatas 1:11-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_3.pdf',
                    },
                    {
                        versiculo: '04. Gálatas 2:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_4.pdf',
                    },
                    {
                        versiculo: '05. Gálatas 2:11-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_5.pdf',
                    },
                    {
                        versiculo: '06. Gálatas 3:1-5',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_6.pdf',
                    },
                    {
                        versiculo: '07. Gálatas 3:6-14',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_7.pdf',
                    },
                    {
                        versiculo: '08. Gálatas 3:15-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_8.pdf',
                    },
                    {
                        versiculo: '09. Gálatas 3:21-28',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_9.pdf',
                    },
                    {
                        versiculo: '10. Gálatas 3:29 al 4:1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_10.pdf',
                    },
                    {
                        versiculo: '11. Gálatas 4:8-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_11.pdf',
                    },
                    {
                        versiculo: '12. Gálatas 4:16-31',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_12.pdf',
                    },
                    {
                        versiculo: '13. Gálatas 5:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_13.pdf',
                    },
                    {
                        versiculo: '14. Gálatas 5:13-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_14.pdf',
                    },
                    {
                        versiculo: '15. Gálatas 5:25 al 6:10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_15.pdf',
                    },
                    {
                        versiculo: '16. Gálatas 6:11-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Galatas_16.pdf',
                    },
                ],
            },
            {
                id: 'efesios',
                name: 'Efesios',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Efesios 1:1-8',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_1.pdf',
                    },
                    {
                        versiculo: '02. Efesios 1:9-14',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_2.pdf',
                    },
                    {
                        versiculo: '03. Efesios 1:15-23',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_3.pdf',
                    },
                    {
                        versiculo: '04. Efesios 2:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_4.pdf',
                    },
                    {
                        versiculo: '05. Efesios 2:11-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_5.pdf',
                    },
                    {
                        versiculo: '06. Efesios 3:1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_6.pdf',
                    },
                    {
                        versiculo: '07. Efesios 3:14-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_7.pdf',
                    },
                    {
                        versiculo: '08. Efesios 4:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_8.pdf',
                    },
                    {
                        versiculo: '09. Efesios 4:11-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_9.pdf',
                    },
                    {
                        versiculo: '10. Efesios 4:17-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_10.pdf',
                    },
                    {
                        versiculo: '11. Efesios 4:26-32',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_11.pdf',
                    },
                    {
                        versiculo: '12. Efesios 5:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_12.pdf',
                    },
                    {
                        versiculo: '13. Efesios 5:11-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_13.pdf',
                    },
                    {
                        versiculo: '14. Efesios 5:21-33',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_14.pdf',
                    },
                    {
                        versiculo: '15. Efesios 6:1-9',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_15.pdf',
                    },
                    {
                        versiculo: '16. Efesios 6:10-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/EFESIOS_16.pdf',
                    },
                ],
            },
            {
                id: 'filipenses',
                name: 'Filipenses',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Filipenses 1:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/FILIPENSES_1.pdf',
                    },
                    {
                        versiculo: '02. Filipenses 1:12-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/FILIPENSES_2.pdf',
                    },
                    {
                        versiculo: '03. Filipenses 1:19-30',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/FILIPENSES_3.pdf',
                    },
                    {
                        versiculo: '04. Filipenses 2:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/FILIPENSES_4.pdf',
                    },
                    {
                        versiculo: '05. Filipenses 2:12-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/FILIPENSES_5.pdf',
                    },
                    {
                        versiculo: '06. Filipenses 2:19-30',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/FILIPENSES_6.pdf',
                    },
                    {
                        versiculo: '07. Filipenses 3:1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/FILIPENSES_7.pdf',
                    },
                    {
                        versiculo: '08. Filipenses 3:8-14',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/FILIPENSES_8.pdf',
                    },
                    {
                        versiculo: '09. Filipenses 3:15-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/FILIPENSES_9.pdf',
                    },
                    {
                        versiculo: '10. Filipenses 4:1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/FILIPENSES_10.pdf',
                    },
                    {
                        versiculo: '11. Filipenses 4:8-23',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/FILIPENSES_11.pdf',
                    },
                ],
            },
            {
                id: 'colosenses',
                name: 'Colosenses',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Colosenses 1:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/COLOSENSES_1.pdf',
                    },
                    {
                        versiculo: '02. Colosenses 1:13-23',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/COLOSENSES_2.pdf',
                    },
                    {
                        versiculo: '03. Colosenses 1:24-29',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/COLOSENSES_3.pdf',
                    },
                    {
                        versiculo: '04. Colosenses 2:1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/COLOSENSES_4.pdf',
                    },
                    {
                        versiculo: '05. Colosenses 2:8-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/COLOSENSES_5.pdf',
                    },
                    {
                        versiculo: '06. Colosenses 2:16-23',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/COLOSENSES_6.pdf',
                    },
                    {
                        versiculo: '07. Colosenses 3:1-8',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/COLOSENSES_7.pdf',
                    },
                    {
                        versiculo: '08. Colosenses 3:9-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/COLOSENSES_8.pdf',
                    },
                    {
                        versiculo: '09. Colosenses 3:16-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/COLOSENSES_9.pdf',
                    },
                    {
                        versiculo: '10. Colosenses 3:22 al 4:1',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/COLOSENSES_10.pdf',
                    },
                    {
                        versiculo: '11. Colosenses 4:2-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/COLOSENSES_11.pdf',
                    },
                    {
                        versiculo: '12. Colosenses 4:12-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/COLOSENSES_12.pdf',
                    },
                ],
            },
            {
                id: 'tesalonica',
                name: 'Cartas de Tesalonica',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. 1° Tesalonicenses 1:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Tesal_1.pdf',
                    },
                    {
                        versiculo: '02. 1° Tesalonicenses 2:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Tesal_2.pdf',
                    },
                    {
                        versiculo: '03. 1° Tesalonicenses 2:13-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Tesal_3.pdf',
                    },
                    {
                        versiculo: '04. 1° Tesalonicenses 3:1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Tesal_4.pdf',
                    },
                    {
                        versiculo: '05. 1° Tesalonicenses 4:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Tesal_5.pdf',
                    },
                    {
                        versiculo: '06. 1° Tesalonicenses 4:13-18 al 5:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Tesal_6.pdf',
                    },
                    {
                        versiculo: '07. 1° Tesalonicenses 5:12-28',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Tesal_7.pdf',
                    },
                    {
                        versiculo: '08. 2° Tesalonicenses 1:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Tesal_8.pdf',
                    },
                    {
                        versiculo: '09. 2° Tesalonicenses 2:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Tesal_9.pdf',
                    },
                    {
                        versiculo: '10. 2° Tesalonicenses 2:13-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Tesal_10.pdf',
                    },
                    {
                        versiculo: '11. 2° Tesalonicenses 3:1-5',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Tesal_11.pdf',
                    },
                    {
                        versiculo: '12. 2° Tesalonicenses 3:6-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Tesal_12.pdf',
                    },
                ],
            },
            {
                id: 'timoteo',
                name: 'Cartas a Timoteo',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. 1° Timoteo 1:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO1.pdf',
                    },
                    {
                        versiculo: '02. 1° Timoteo 1:12-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO2.pdf',
                    },
                    {
                        versiculo: '03. 1° Timoteo 2:1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO3.pdf',
                    },
                    {
                        versiculo: '04. 1° Timoteo 2:8-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO4.pdf',
                    },
                    {
                        versiculo: '05. 1° Timoteo 3:1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO5.pdf',
                    },
                    {
                        versiculo: '06. 1° Timoteo 3:8-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO6.pdf',
                    },
                    {
                        versiculo: '07. 1° Timoteo 3:14-16 al 4:1-5',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO7.pdf',
                    },
                    {
                        versiculo: '08. 1° Timoteo 4:6-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO8.pdf',
                    },
                    {
                        versiculo: '09. 1° Timoteo 4:12-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO9.pdf',
                    },
                    {
                        versiculo: '10. 1° Timoteo 5:1-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO10.pdf',
                    },
                    {
                        versiculo: '11. 1° Timoteo 5:17-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO11.pdf',
                    },
                    {
                        versiculo: '12. 1° Timoteo 5:24-25 al 6:1-5',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO12.pdf',
                    },
                    {
                        versiculo: '13. 1° Timoteo 6:6-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO13.pdf',
                    },
                    {
                        versiculo: '14. 1° Timoteo 6:13-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_TIMOTEO14.pdf',
                    },
                    {
                        versiculo: '01. 2° Timoteo 1:1-5',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Timoteo1.pdf',
                    },
                    {
                        versiculo: '02. 2° Timoteo 1:6-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Timoteo2.pdf',
                    },
                    {
                        versiculo: '03. 2° Timoteo 1:12-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Timoteo3.pdf',
                    },
                    {
                        versiculo: '04. 2° Timoteo 2:1:7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Timoteo4.pdf',
                    },
                    {
                        versiculo: '05. 2° Timoteo 2:8-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Timoteo5.pdf',
                    },
                    {
                        versiculo: '06. 2° Timoteo 2:14-19',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Timoteo6.pdf',
                    },
                    {
                        versiculo: '07. 2° Timoteo 2:20-26',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Timoteo7.pdf',
                    },
                    {
                        versiculo: '08. 2° Timoteo 3:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Timoteo8.pdf',
                    },
                    {
                        versiculo: '09. 2° Timoteo 3:12-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Timoteo9.pdf',
                    },
                    {
                        versiculo: '10. 2° Timoteo 4:1-8',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Timoteo10.pdf',
                    },
                    {
                        versiculo: '11. 2° Timoteo 4:9-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Timoteo11.pdf',
                    },
                ],
            },
            {
                id: 'tito',
                name: 'Tito',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Tito 1:1-4',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/TITO_1.pdf',
                    },
                    {
                        versiculo: '02. Tito 1:5-9',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/TITO_2.pdf',
                    },
                    {
                        versiculo: '03. Tito 1.10-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/TITO_3.pdf',
                    },
                    {
                        versiculo: '04. Tito 2:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/TITO_4.pdf',
                    },
                    {
                        versiculo: '05. Tito 2:11-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/TITO_5.pdf',
                    },
                    {
                        versiculo: '06. Tito 3.1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/TITO_6.pdf',
                    },
                    {
                        versiculo: '07. Tito 3:8-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/TITO_7.pdf',
                    },
                ],
            },
            {
                id: 'filemon',
                name: 'Filemon',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: 'Filemón.',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/Filemon_1.pdf',
                    },
                ],
            },
            {
                id: 'hebreos',
                name: 'Hebreos',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Hebreos 1:1-14',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS1.pdf',
                    },
                    {
                        versiculo: '02. Hebreos 2:1-9',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS2.pdf',
                    },
                    {
                        versiculo: '03. Hebreos 2:10-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS3.pdf',
                    },
                    {
                        versiculo: '04. Hebreos 3:1-19',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS4.pdf',
                    },
                    {
                        versiculo: '05. Hebreos 4:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS5.pdf',
                    },
                    {
                        versiculo: '06. Hebreos 4:12-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS6.pdf',
                    },
                    {
                        versiculo: '07. Hebreos 5:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS7.pdf',
                    },
                    {
                        versiculo: '08. Hebreos 5:11-14 al 6:1-3',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS8.pdf',
                    },
                    {
                        versiculo: '09. Hebreos 6:4-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS9.pdf',
                    },
                    {
                        versiculo: '10. Hebreos 6:11-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS10.pdf',
                    },
                    {
                        versiculo: '11. Hebreos 7:1-19',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS11.pdf',
                    },
                    {
                        versiculo: '12. Hebreos 7:20-28',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS12.pdf',
                    },
                    {
                        versiculo: '13. Hebreos 8:1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS13.pdf',
                    },
                    {
                        versiculo: '14. Hebreos 9:1-14',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS14.pdf',
                    },
                    {
                        versiculo: '15. Hebreos 9:15-28',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS15.pdf',
                    },
                    {
                        versiculo: '16. Hebreos 10:1-14',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS16.pdf',
                    },
                    {
                        versiculo: '17. Hebreos 10:15-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS17.pdf',
                    },
                    {
                        versiculo: '18. Hebreos 10:26-39',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS18.pdf',
                    },
                    {
                        versiculo: '19. Hebreos 11:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS19.pdf',
                    },
                    {
                        versiculo: '20. Hebreos 11:13-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS20.pdf',
                    },
                    {
                        versiculo: '21. Hebreos 11:23-31',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS21.pdf',
                    },
                    {
                        versiculo: '22. Hebreos 11:33-40',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS22.pdf',
                    },
                    {
                        versiculo: '23. Hebreos 12:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS23.pdf',
                    },
                    {
                        versiculo: '24. Hebreos 12:12-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS24.pdf',
                    },
                    {
                        versiculo: '25. Hebreos 12:18-29',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS25.pdf',
                    },
                    {
                        versiculo: '26. Hebreos 13:1-6',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS26.pdf',
                    },
                    {
                        versiculo: '27. Hebreos 13:7-14',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS27.pdf',
                    },
                    {
                        versiculo: '28. Hebreos 13:15-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/HEBREOS28.pdf',
                    },
                ],
            },
            {
                id: 'santiago',
                name: 'Santiago',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Santiago 1:1-8',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/SANTIAGO_1.pdf',
                    },
                    {
                        versiculo: '02. Santiago 1:9-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/SANTIAGO_2.pdf',
                    },
                    {
                        versiculo: '03. Santiago 1:19-27',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/SANTIAGO_3.pdf',
                    },
                    {
                        versiculo: '04. Santiago 2:1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/SANTIAGO_4.pdf',
                    },
                    {
                        versiculo: '05. Santiago 2:14-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/SANTIAGO_5.pdf',
                    },
                    {
                        versiculo: '06. Santiago 3:1-12',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/SANTIAGO_6.pdf',
                    },
                    {
                        versiculo: '07. Santiago 3:13-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/SANTIAGO_7.pdf',
                    },
                    {
                        versiculo: '08. Santiago 4:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/SANTIAGO_8.pdf',
                    },
                    {
                        versiculo: '09. Santiago 5:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/SANTIAGO_9.pdf',
                    },
                    {
                        versiculo: '10. Santiago 5:12-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/SANTIAGO_10.pdf',
                    },
                ],
            },
            {
                id: 'pedro',
                name: 'Cartas de Pedro',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. 1 Pedro 1:1-9',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_PEDRO_1.pdf',
                    },
                    {
                        versiculo: '02. 1 Pedro 1:10-16',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_PEDRO_2.pdf',
                    },
                    {
                        versiculo: '03. 1 Pedro 1:17-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_PEDRO_3.pdf',
                    },
                    {
                        versiculo: '04. 1 Pedro 2:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_PEDRO_4.pdf',
                    },
                    {
                        versiculo: '05. 1 Pedro 2:11-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_PEDRO_5.pdf',
                    },
                    {
                        versiculo: '06. 1 Pedro 2:18-25',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_PEDRO_6.pdf',
                    },
                    {
                        versiculo: '07. 1 Pedro 3:1-7',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_PEDRO_7.pdf',
                    },
                    {
                        versiculo: '08. 1 Pedro 3:8-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_PEDRO_8.pdf',
                    },
                    {
                        versiculo: '09. 1 Pedro 4:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_PEDRO_9.pdf',
                    },
                    {
                        versiculo: '10. 1 Pedro 4:12-19',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_PEDRO_10.pdf',
                    },
                    {
                        versiculo: '11. 1 Pedro 5:1-14',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1_PEDRO_11.pdf',
                    },
                    {
                        versiculo: '01. 2 Pedro 1:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Pedro_1.pdf',
                    },
                    {
                        versiculo: '02. 2 Pedro 1:12-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Pedro_2.pdf',
                    },
                    {
                        versiculo: '03. 2 Pedro 2:1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Pedro_3.pdf',
                    },
                    {
                        versiculo: '04. 2 Pedro 2:17-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Pedro_4.pdf',
                    },
                    {
                        versiculo: '05. 2 Pedro 3:1-9',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Pedro_5.pdf',
                    },
                    {
                        versiculo: '06. 2 Pedro 3:10-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/2_Pedro_6.pdf',
                    },
                ],
            },
            {
                id: 'juan',
                name: 'Cartas de Juan',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. 1° Juan 1:1-10',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1JUAN_1.pdf',
                    },
                    {
                        versiculo: '02. 1° Juan 2:1-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1JUAN_2.pdf',
                    },
                    {
                        versiculo: '03. 1° Juan 2:15-29',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1JUAN_3.pdf',
                    },
                    {
                        versiculo: '04. 1° Juan 3:1-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1JUAN_4.pdf',
                    },
                    {
                        versiculo: '05. 1° Juan 3:19-24; 4:1-6',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1JUAN_5.pdf',
                    },
                    {
                        versiculo: '06. 1° Juan 4:7-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1JUAN_6.pdf',
                    },
                    {
                        versiculo: '07. 1° Juan 5:1-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/1JUAN_7.pdf',
                    },
                ],
            },
            {
                id: 'judas',
                name: 'Judas',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Judas 1:1-11.',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/JUDAS1.pdf',
                    },
                    {
                        versiculo: '02. Judas 1:12-25.',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/JUDAS2.pdf',
                    },
                ],
            },
            {
                id: 'apocalipsis',
                name: 'Apocalipsis',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Apocalipsis 1:1-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_1.pdf',
                    },
                    {
                        versiculo: '02. Apocalipsis 2:1-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_2.pdf',
                    },
                    {
                        versiculo: '03. Apocalipsis 2:18-29 al 3:1-6',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_3.pdf',
                    },
                    {
                        versiculo: '04. Apocalipsis 3:7-22',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_4.pdf',
                    },
                    {
                        versiculo: '05. Apocalipsis 4:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_5.pdf',
                    },
                    {
                        versiculo: '06. Apocalipsis 5:1-14',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_6.pdf',
                    },
                    {
                        versiculo: '07. Apocalipsis 6:1-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_7.pdf',
                    },
                    {
                        versiculo: '08. Apocalipsis 7:1-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_8.pdf',
                    },
                    {
                        versiculo: '09. Apocalipsis 8:1-13',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_9.pdf',
                    },
                    {
                        versiculo: '10. Apocalipsis 9:1-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_10.pdf',
                    },
                    {
                        versiculo: '11. Apocalipsis 10:1-11',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_11.pdf',
                    },
                    {
                        versiculo: '12. Apocalipsis 11:1-19',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_12.pdf',
                    },
                    {
                        versiculo: '13. Apocalipsis 12:1-17',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_13.pdf',
                    },
                    {
                        versiculo: '14. Apocalipsis 13:1-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_14.pdf',
                    },
                    {
                        versiculo: '15. Apocalipsis 14:1-20',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_15.pdf',
                    },
                    {
                        versiculo: '16. Apocalipsis 15:1-8',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_16.pdf',
                    },
                    {
                        versiculo: '17. Apocalipsis 16:1-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_17.pdf',
                    },
                    {
                        versiculo: '18. Apocalipsis 17:1-18',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_18.pdf',
                    },
                    {
                        versiculo: '19. Apocalipsis 18:1-24',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_19.pdf',
                    },
                    {
                        versiculo: '20. Apocalipsis 19:1-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_20.pdf',
                    },
                    {
                        versiculo: '21. Apocalipsis 20:1-15',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_21.pdf',
                    },
                    {
                        versiculo: '22. Apocalipsis 21:1-27',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_22.pdf',
                    },
                    {
                        versiculo: '23. Apocalipsis 22:1-21',
                        filePath: 'https://www.pueblonuevobautista.com.ar/3material/estudios/APOCALIPSIS_23.pdf',
                    },
                ],
            },
        ],
    },
    {
        title: 'Estudios Nombres de Jesús',
        description: 'Descubre el significado profundo de cada nombre de Cristo',
        emoji: '✝️',
        content: [
            {
                id: 'salvador',
                name: '01 Jesus, El Salvador.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/01_JESUS_EL_SALVADOR.pdf',
            },
            {
                id: 'senior',
                name: '02 Jesus, El Señor.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/02_JESUS_EL_SENOR.pdf',
            },
            {
                id: 'maestro',
                name: '03 Jesus, El Maestro.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/03_JESUS_EL_MAESTRO.pdf',
            },
            {
                id: 'profeta',
                name: '04 Jesus, El Profeta.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/04_JESUS_EL_PROFETA.pdf',
            },
            {
                id: 'logos',
                name: '05 Jesús, El Logos',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/05_JESUS_EL_LOGOS.pdf',
            },
            {
                id: 'mesias',
                name: '06 Jesús, El Mesías',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/06_JESUS_EL_MESIAS.pdf',
            },
            {
                id: 'renuevo',
                name: '07 Jesús, El Renuevo',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/07_JESUS_EL_RENUEVO.pdf',
            },
            {
                id: 'hijo-hombre',
                name: '08 Jesús, El Hijo del Hombre',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/08_JESUS_EL_HIJO_DE_HOMBRE.pdf',
            },
            {
                id: 'hijo-dios',
                name: '09 Jesús, Hijo de Dios',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/09_JESUS_HIJO_DE_DIOS.pdf',
            },
            {
                id: 'puerta',
                name: '10 Jesús, La Puerta',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/10_JESUS_LA_PUERTA.pdf',
            },
            {
                id: 'camino',
                name: '11 Jesús, El Camino',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/11_JESUS_EL-CAMINO.pdf',
            },
            {
                id: 'verdad',
                name: '12 Jesús, La Verdad',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/12_JESUS_LA_VERDAD.pdf',
            },
            {
                id: 'vida',
                name: '13 Jesús, La Vida',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/13_JESUS_LA_VIDA.pdf',
            },
            {
                id: 'resurreccion',
                name: '14 Jesús, La Resurrección',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/14_JESUS_LA_RESURRECCION.pdf',
            },
            {
                id: 'amen',
                name: '15 Jesús, El Amén',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/15_JESUS_EL_AMEN.pdf',
            },
            {
                id: 'alfa-omega',
                name: '16 Jesús, El Alfa y La Omega',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/16_JESUS_EL_ALFA_Y_LA_OMEGA.pdf',
            },
            {
                id: 'admirable',
                name: '17 Jesús, Admirable',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/17_JESUS_ADMIRABLE.pdf',
            },
            {
                id: 'consejero',
                name: '18 Jesús, Consejero',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/17_JESUS_ADMIRABLE.pdf',
            },
            {
                id: 'Dios-fuerte',
                name: '19 Jesús, Dios Fuerte',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/19_JESUS_DIOS_FUERTE.pdf',
            },
            {
                id: 'Padre-Eterno',
                name: '20 Jesús, Padre Eterno',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/20_JESUS_PADRE_ETERNO.pdf',
            },
            {
                id: 'principe-paz',
                name: '21 Jesús, Príncipe de Paz',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/21_JESUS_PRINCIPE_DE_PAZ.pdf',
            },
            {
                id: 'raiz',
                name: '22 Jesús, La Raíz',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/22_JESUS_LA_RAIZ.pdf',
            },
            {
                id: 'leon',
                name: '23 Jesús, El León',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/23_JESUS_EL_LEON.pdf',
            },
            {
                id: 'pastor',
                name: '24 Jesús, El Buen Pastor',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/24_JESUS_EL_BUEN_PASTOR.pdf',
            },
            {
                id: 'vid-verdadera',
                name: '25 Jesús, La Vid Verdadera',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/25_JESUS_LA_VID_VERDADERA.pdf',
            },
            {
                id: 'pan-vida',
                name: '26 Jesús, El Pan de la Vida',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/26_JESUS_EL_PAN_DE_VIDA.pdf',
            },
            {
                id: 'mediador',
                name: '27 Jesús, El Medidador',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/27_JESUS_EL_MEDIADOR.pdf',
            },
            {
                id: 'justo',
                name: '28 Jesús, El Justo',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/28_JESUS_EL_JUSTO.pdf',
            },
            {
                id: 'testigo',
                name: '29 Jesús, El Testigo',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/29_JESUS_EL_TESTIGO_FIEL.pdf',
            },
            {
                id: 'libertador',
                name: '30 Jesús, El Libertador',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/30_JESUS_EL_LIBERTADOR.pdf',
            },
            {
                id: 'santo',
                name: '31 Jesús, El Santo',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/30_JESUS_EL_LIBERTADOR.pdf',
            },
            {
                id: 'luz-mundo',
                name: '32 Jesús, La Luz del Mundo',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/32_JESUS_LA_LUZ_DEL_MUNDO.pdf',
            },
            {
                id: 'apostol',
                name: '33 Jesús, El Apóstol',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/33_JESUS_EL_APOSTOL.pdf',
            },
            {
                id: 'fiel-verdadero',
                name: '34 Jesús, Fiel y Verdadero',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/34_JESUS_FIEL_Y_VERDADERO.pdf',
            },
            {
                id: 'esposo',
                name: '35 Jesús, El Esposo',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/35_JESUS_EL_ESPOSO.pdf',
            },
            {
                id: 'redentor',
                name: '36 Jesús, El Redentor',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/36_JESUS_EL_REDENTOR.pdf',
            },
            {
                id: 'autor-vida',
                name: '37 Jesús, Autor de la Vida',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/37_JESUS_AUTOR_DE_LA_VIDA.pdf',
            },
            {
                id: 'sumo-sacerdote',
                name: '38 Jesús, Sumo Sacerdote',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/38_%20JESUS_SUMO_SACERDOTE.pdf',
            },
            {
                id: 'cabeza-iglesia',
                name: '39 Jesús, Cabeza de la Iglesia',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/39_JESUS_CABEZA_DE_LA_IGLESIA.pdf',
            },
            {
                id: 'juez',
                name: '40 Jesús, el Juez',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/40_JESUS_EL_JUEZ.pdf',
            },
            {
                id: 'yo-soy',
                name: '41 Jesús, el Yo Soy',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/41_JESUS_EL_YO_SOY.pdf',
            },
            {
                id: 'postrer-adan',
                name: '42 Jesús, el Postrer Adán',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/42_JESUS_EL_POSTRER_ADAN.pdf',
            },
            {
                id: 'creador',
                name: '43 Jesús, el Creador',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/43_JESUS_EL_CREADOR.pdf',
            },
            {
                id: 'cordero-Dios',
                name: '44 Jesús, el Cordero de Dios',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/44_JESUS_EL_CORDERO_DE_DIOS.pdf',
            },
            {
                id: 'rey-siglos',
                name: '45 Jesús, el Rey de los Siglos',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/45_JESUS_REY_DE_LOS_SIGLOS.pdf',
            },
            {
                id: 'amado',
                name: '46 Jesús, el Amado',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/46_JESUS_EL_AMADO.pdf',
            },
            {
                id: 'primogenito-creacion',
                name: '47 Jesús, Primogénito de la Creación',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/47_PRIMOGENITO_DE_LA_CREACION.pdf',
            },
            {
                id: 'nuestra-paz',
                name: '48 Jesús, nuestra Paz',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/48_JESUS_NUESTRA_PAZ.pdf',
            },
            {
                id: 'fuente',
                name: '49 Jesús, la Fuente',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/49_JESUS_LA_FUENTE.pdf',
            },
            {
                id: 'piedra-angulo',
                name: '50 Jesús, la Piedra del Ángulo',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/nombres_jesus/50_JESUS_LA_PIEDRA_DEL_ANGULO.pdf',
            },
        ],
    },
    {
        title: 'Discipulados',
        description: 'Recursos para el crecimiento y formación de discípulos',
        emoji: '🙏',
        content: [
            {
                id: 'primeros-pasos',
                name: 'Primeros Pasos en la vida Cristiana',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/discipulado/LOS_PRIMEROS_PASOS.pdf',
            },
            {
                id: 'didaktikos',
                name: 'Didaktikos, Aptos Para Enseñar',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/discipulado/DIDAKTIKOS_2015.pdf',
            },
            {
                id: 'manual',
                name: 'Manual para Grupos de Bendicion y Crecimiento',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/discipulado/Manual_GBC.pdf',
            },
            {
                id: 'bases',
                name: 'Bases y Principios de crecimiento de la Iglesia',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/discipulado/BASES%20Y%20PRIMER%20PRINCIPIOS%20DE%20CRECIMIENTO.pdf',
            },
        ],
    },
    {
        title: 'Cristo el Fundamento en toda la Biblia',
        description: 'Explorando a Cristo desde Génesis hasta Apocalipsis',
        emoji: '⛪',
        content: [
            {
                id: 'principio',
                name: 'CRISTO EL FUNDAMENTO DEL PRINCIPIO DE TODO EN:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Génesis.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/01_CRISTO_EL_FUNDAMENTO_DEL_PRINCIPIO_DE_TODO_EN_GENESIS.docx',
                    },
                    {
                        versiculo: '02. Éxodo.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/02_CRISTO_EL_FUNDAMENTO_DEL_PRINCIPIO_DE_TODO_EN_EXODO.docx',
                    },
                    {
                        versiculo: '03. Levítico.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/03_CRISTO_EL_FUNDAMENTO_DEL_PRINCIPIO_DE_TODO_EN_LEVITICO.docx',
                    },
                    {
                        versiculo: '04. Números.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/04_CRISTO_EL_FUNDAMENTO_DEL_PRINCIPIO_DE_TODO_EN_NUMEROS.docx',
                    },
                    {
                        versiculo: '05. Deuteronomio.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/05_CRISTO_EL_FUNDAMENTO_DEL_PRINCIPIO_DE_TODO_EN_DEUTERONOMIO.docx',
                    },
                ],
            },
            {
                id: 'historia',
                name: 'CRISTO EL FUNDAMENTO DE LA HISTORIA EN:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '06. Josué.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/06_CRISTO_EL_FUNDAMENTO_DE_LA_HISTORIA_EN_JOSUE.docx',
                    },
                    {
                        versiculo: '07. Jueces y Rut.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/07_CRISTO_EL_FUNDAMENTO_DE_LA_HISTORIA_EN_JUECES_Y_RUT.docx',
                    },
                    {
                        versiculo: '08. 1° y 2° de Samuel.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/08_CRISTO_EL_FUNDAMENTO_DE_LA_HISTORIA_EN_1_Y_2_SAMUEL.docx',
                    },
                    {
                        versiculo: '09. 1° y 2° Reyes; y 1° y 2° Crónicas.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/09_CRISTO_EL_FUNDAMENTO_DE_LA_HISTORIA_EN_REYES_Y_CRONICAS.docx',
                    },
                ],
            },
            {
                id: 'restauracion',
                name: 'CRISTO EL FUNDAMENTO DE LA RESTAURACIÓN EN:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '10. Esdras.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/10_CRISTO_EL_FUNDAMENTO_DE_LA_RESTAURACION_EN_ESDRAS.docx',
                    },
                    {
                        versiculo: '11. Nehemías.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/11_CRISTO_EL_FUNDAMENTO_DE_LA_RESTAURACION_EN_NEHEMIAS.docx',
                    },
                    {
                        versiculo: '12. Ester.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/12_CRISTO_EL_FUNDAMENTO_DE_LA_RESTAURACION_EN_ESTER.docx',
                    },
                    {
                        versiculo: '13. Job.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/13_CRISTO_EL_FUNDAMENTO_DE_LA_RESTAURACION_EN_JOB.docx',
                    },
                ],
            },
            {
                id: 'alabanza',
                name: 'CRISTO EL FUNDAMENTO DE LA ALABANZA EN:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '14. Los Salmos.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/14_CRISTO_EL_FUNDAMENTO_DE_LA_ALABANZA_Y_LA_SABIDURIA_EN_LOS_SALMOS.docx',
                    },
                    {
                        versiculo: '15. Proverbios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/15_CRISTO_EL_FUNDAMENTO_DE_LA_ALABANZA_Y_LA_SABIDURIA_EN_PROVERBIOS.docx',
                    },
                    {
                        versiculo: '16. Eclesiastés.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/16_CRISTO_EL_FUNDAMENTO_DE_LA_ALABANZA_Y_LA_SABIDURIA_EN_ECLESIASTES.docx',
                    },
                    {
                        versiculo: '17. Cantares.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/17_CRISTO_EL_FUNDAMENTO_DE_LA_ALABANZA_Y_LA_SABIDURIA_EN_CANTARES.docx',
                    },
                ],
            },
            {
                id: 'profecia',
                name: 'CRISTO EL FUNDAMENTO DE LA PROFECÍA EN:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '18. Isaías.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/18_CRISTO_EL_FUNDAMENTO_DE_LA_PROFECIA_EN_ISAIAS.docx',
                    },
                    {
                        versiculo: '19. Jeremías.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/19_CRISTO_EL_FUNDAMENTO_DE_LA_PROFECIA_EN_JEREMIAS.docx',
                    },
                    {
                        versiculo: '20. Lamentaciones.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/20_CRISTO_EL_FUNDAMENTO_DE_LA_PROFECIA_EN_LAMENTACIONES.docx',
                    },
                    {
                        versiculo: '21. Ezequiel.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/21_CRISTO_EL_FUNDAMENTO_DE_LA_PROFECIA_EN_EZEQUIEL.docx',
                    },
                    {
                        versiculo: '22. Daniel.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/22_CRISTO_EL_FUNDAMENTO_DE_LA_PROFECIA_EN_DANIEL.docx',
                    },
                ],
            },
            {
                id: 'justicia',
                name: 'CRISTO EL FUNDAMENTO DE LA JUSTICIA EN:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '23. Oseas.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/23_CRISTO_EL_FUNDAMENTO_DE_LA_JUSTICIA_EN_OSEAS.docx',
                    },
                    {
                        versiculo: '24. Joel.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/24_CRISTO_EL_FUNDAMENTO_DE_LA_JUSTICIA_EN_JOEL.docx',
                    },
                    {
                        versiculo: '25. Amos, Abdías y Jonás.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/24_CRISTO_EL_FUNDAMENTO_DE_LA_JUSTICIA_EN_JOEL.docx',
                    },
                    {
                        versiculo: '26. Miqueas.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/26_CRISTO_EL_FUNDAMENTO_DE_LA_JUSTICIA_EN_MIQUEAS.docx',
                    },
                ],
            },
            {
                id: 'integridad',
                name: 'CRISTO EL FUNDAMENTO DE LA INTEGRIDAD EN:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '27. Nahúm y Habacuc.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/27_CRISTO_EL_FUNDAMENTO_DE_LA_INTEGRIDAD_EN_NAHUM_Y_HABACUC.docx',
                    },
                    {
                        versiculo: '28. Sofonías y Hageo.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/28_CRISTO_EL_FUNDAMENTO_DE_LA_INTEGRIDAD_EN_SOFONIAS_Y_HAGEO.docx',
                    },
                    {
                        versiculo: '29. Zacarías.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/29_CRISTO_EL_FUNDAMENTO_DE_LA_INTEGRIDAD_EN_ZACARIAS.docx',
                    },
                    {
                        versiculo: '30. Malaquías.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/30_CRISTO_EL_FUNDAMENTO_DE_LA_INTEGRIDAD_EN_MALAQUIAS.docx',
                    },
                ],
            },
            {
                id: 'evangelio-hechos',
                name: 'CRISTO EL FUNDAMENTO DEL EVANGELIO Y LOS HECHOS EN:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '31. Mateo.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/31_CRISTO_EL_FUNDAMENTO_DEL_EVANGELIO_EN_MATEO.docx',
                    },
                    {
                        versiculo: '32. Marcos.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/32_CRISTO_EL_FUNDAMENTO_DEL_EVANGELIO_EN_MARCOS.docx',
                    },
                    {
                        versiculo: '33. Lucas.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/33_CRISTO_EL_FUNDAMENTO_DEL_EVANGELIO_EN_LUCAS.docx',
                    },
                    {
                        versiculo: '34. Juan.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/34_CRISTO_EL_FUNDAMENTO_DEL_EVANGELIO_EN_JUAN.docx',
                    },
                    {
                        versiculo: '35. Hechos.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/35_CRISTO_EL_FUNDAMENTO_DE_LOS_HECHOS_DE_LOS_APOSTOLES.docx',
                    },
                ],
            },
            {
                id: 'gracia',
                name: 'CRISTO EL FUNDAMENTO DE LA GRACIA EN:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '36. Romanos.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/36_CRISTO_EL_FUNDAMENTO_DE_LA_GRACIA_EN_ROMANOS.docx',
                    },
                    {
                        versiculo: '37. 1° Corintios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/37_CRISTO_EL_FUNDAMENTO_DE_LA_GRACIA_EN_1_CORINTIOS.docx',
                    },
                    {
                        versiculo: '38. 2° Corintios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/38_CRISTO_EL_FUNDAMENTO_DE_LA_GRACIA_EN_2_CORINTIOS.docx',
                    },
                    {
                        versiculo: '39. Gálatas.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/39_CRISTO_EL_FUNDAMENTO_DE_LA_GRACIA_EN_GALATAS.docx',
                    },
                ],
            },
            {
                id: 'riqueza-amor',
                name: 'CRISTO EL FUNDAMENTO DE NUESTRA RIQUEZA Y AMOR EN:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '40. Efesios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/40_CRISTO_EL_FUNDAMENTO_DE_NUESTRA_RIQUEZA_Y_AMOR_EN_EFESIOS.docx',
                    },
                    {
                        versiculo: '41. Filipenses.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/41_CRISTO_EL_FUNDAMENTO_DE_NUESTRA_RIQUEZA_Y_AMOR_EN_FILIPENSES.docx',
                    },
                    {
                        versiculo: '42. Colosenses.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/42_CRISTO_EL_FUNDAMENTO_DE_NUESTRA_RIQUEZA_Y_AMOR_EN_COLOSENSES.docx',
                    },
                    {
                        versiculo: '43. 1° Tesalonicenses.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/43_CRISTO_EL_FUNDAMENTO_DE_NUESTRA_RIQUEZA_Y_AMOR_EN_1_TESALONICENSES.docx',
                    },
                    {
                        versiculo: '44. 2° Tesalonicenses.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/44_CRISTO_EL_FUNDAMENTO_DE_NUESTRA_RIQUEZA_Y_AMOR_EN_2_TESALONICENSES.docx',
                    },
                ],
            },
            {
                id: 'ministerio',
                name: 'CRISTO EL FUNDAMENTO DE NUESTRO MINISTERIO EN:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '45. 1° Timoteo.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/45_CRISTO_EL_FUNDAMENTO_DE_NUESTRO_MINISTERIO_EN_1_TIMOTEO.docx',
                    },
                    {
                        versiculo: '46. 2° Timoteo.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/46_CRISTO_EL_FUNDAMENTO_DE_NUESTRO_MINISTERIO_EN_2_TIMOTEO.docx',
                    },
                    {
                        versiculo: '47. Tito y Filemón.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/47_CRISTO_EL_FUNDAMENTO_DE_NUESTRO_MINISTERIO_EN_TITO_Y_FILEMON.docx',
                    },
                    {
                        versiculo: '48. Hebreos.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/48_CRISTO_EL_FUNDAMENTO_DE_NUESTRO_MINISTERIO_EN_LA_EPISTOLA_A_LOS_HEBREOS.docx',
                    },
                ],
            },
            {
                id: 'perseverancia',
                name: 'CRISTO EL FUNDAMENTO DE LA PERSEVERANCIA EN:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '49. Santiago.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/49_CRISTO_EL_FUNDAMENTO_DE_LA_PERSEVERANCIA_EN_SANTIAGO.docx',
                    },
                    {
                        versiculo: '50. 1° y 2° Pedro.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/50_CRISTO_EL_FUNDAMENTO_DE_LA_PERSEVERANCIA_EN_1_Y_2_PEDRO.docx',
                    },
                    {
                        versiculo: '51. 1°, 2° y 3° Juan.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/51_CRISTO_EL_FUNDAMENTO_DE_LA_PERSEVERANCIA_EN_1,_2,_3_JUAN.docx',
                    },
                    {
                        versiculo: '52. Judas y Apocalipsis.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2021/52_CRISTO_EL_FUNDAMENTO_DE_LA_PERSEVERANCIA_EN_JUDAS_Y_APOCALIPSIS.docx',
                    },
                ],
            },
        ],
    },
    {
        title: 'Todo el Consejo de Dios',
        description: 'Estudio panorámico de las Escrituras',
        emoji: '📚',
        content: [
            {
                id: 'inicios',
                name: 'EL CONSEJO DE DIOS DESDE LOS INICIOS:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. El Valor de Todo el Consejo de Dios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/01_EL_VALOR_DE_TODO_EL_CONSEJO_DE_DIOS.docx',
                    },
                    {
                        versiculo: '02. En la Creación.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/02_EL_CONSEJO_DE_DIOS_EN_LA_CREACION.docx',
                    },
                    {
                        versiculo: '03. Para la Ecología.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/03_EL_CONSEJO_DE_DIOS_PARA_LA_ECOLOGIA.docx',
                    },
                    {
                        versiculo: '04. Para la Violencia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/04_EL_CONSEJO_DE_DIOS_PARA_LA_VIOLENCIA.docx',
                    },
                    {
                        versiculo: '05. Para la Ira.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/05_EL_CONSEJO_DE_DIOS_PARA_LA_IRA.docx',
                    },
                ],
            },
            {
                id: 'precursores',
                name: 'EL CONSEJO DE DIOS A LOS PRECURSORES:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '06. Noé.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/06_EL_CONSEJO_DE_DIOS_A_LOS_PRECURSORES_NOE.docx',
                    },
                    {
                        versiculo: '07. Abraham.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/07_EL_CONSEJO_DE_DIOS_A_LOS_PRECURSORES_ABRAHAM.docx',
                    },
                    {
                        versiculo: '08. Isaac.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/08_EL_CONSEJO_DE_DIOS_A_LOS_PRECURSORES_ISAAC.docx',
                    },
                    {
                        versiculo: '09. Jacob.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/08_EL_CONSEJO_DE_DIOS_A_LOS_PRECURSORES_ISAAC.docx',
                    },
                ],
            },
            {
                id: 'liderazgo',
                name: 'EL CONSEJO DE DIOS PARA EL LIDERAZGO:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '10. José.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/10_EL_CONSEJO_DE_DIOS_PARA_EL_LIDERAZGO_JOSE.docx',
                    },
                    {
                        versiculo: '11. Moisés.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/11_EL_CONSEJO_DE_DIOS_PARA_EL_LIDERAZGO_MOISES.docx',
                    },
                    {
                        versiculo: '12. Aarón.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/12_EL_CONSEJO_DE_DIOS_PARA_EL_LIDERAZGO_AARON.docx',
                    },
                    {
                        versiculo: '13. Josué.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/13_EL_CONSEJO_DE_DIOS_PARA_EL_LIDERAZGO_JOSUE.docx',
                    },
                ],
            },
            {
                id: 'tiempos-turbulentos',
                name: 'EL CONSEJO DE DIOS EN TIEMPOS TURBULENTOS:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '14. Jueces.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/14_EL_CONSEJO_DE_DIOS_EN_TIEMPOS_TURBULENTOS.docx',
                    },
                    {
                        versiculo: '15. Gedeón.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/15_EL%20CONSEJO_DE_DIOS_POR_MEDIO_DE_GEDEON_PARA_LOS_TIEMPOS_TURBULENTOS.docx',
                    },
                    {
                        versiculo: '16. Sansón.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/16_EL%20CONSEJO_DE_DIOS_POR_MEDIO_DE_SANSON_PARA_LOS_TIEMPOS_TURBULENTOS.docx',
                    },
                    {
                        versiculo: '17. Samuel.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/17_EL%20CONSEJO_DE_DIOS_POR_MEDIO_DE_SAMUEL_PARA_LOS_TIEMPOS_TURBULENTOS.docx',
                    },
                ],
            },
            {
                id: 'gobernar',
                name: 'EL CONSEJO DE DIOS PARA GOBERNAR:',
                icon: 'folder',
                pdfs: [
                    {
                        versiculo: '18. Saúl.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/18_EL_CONSEJO_DE_DIOS_PARA_GOBERNAR_SAUL.docx',
                    },
                    {
                        versiculo: '19. David.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/19_EL_CONSEJO_DE_DIOS_PARA_GOBERNAR_DAVID.docx',
                    },
                    {
                        versiculo: '20. Salomón.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/19_EL_CONSEJO_DE_DIOS_PARA_GOBERNAR_DAVID.docx',
                    },
                    {
                        versiculo: '21. Síntesis 1°.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/21_EL_CONSEJO_DE_DIOS_PARA_GOBERNAR_EN_SINTESIS_1%C2%B0.docx',
                    },
                    {
                        versiculo: '22. Síntesis 2°.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/22_EL_CONSEJO_DE_DIOS_PARA_GOBERNAR_EN_SINTESIS_2%C2%B0.docx',
                    },
                ],
            },
            {
                id: 'carisma',
                name: 'EL CONSEJO DE DIOS POR MEDIO DEL CARISMA PROFÉTICO:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '23. El Carisma Profético.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/23_EL_CONSEJO_DE_DIOS_POR_MEDIO_DEL_CARISMA_PROFETICO.docx',
                    },
                    {
                        versiculo: '24. Elías.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/24_EL_CONSEJO_DE_DIOS_POR_MEDIO_DEL_CARISMA_PROFEETICO_ELIAS.docx',
                    },
                    {
                        versiculo: '25. Eliseo.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/25_EL_CONSEJO_DE_DIOS_POR_MEDIO_DEL_CARISMA_PROFETICO_ELISEO.docx',
                    },
                    {
                        versiculo: '26. Poco conocidos',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/26_EL_CONSEJO_DE_DIOS_POR_MEDIO_DEL_CARISMA_PROFETICO_PROFETAS_POCO_CONOCIDOS.docx',
                    },
                ],
            },
            {
                id: 'profetas',
                name: 'EL CONSEJO DE DIOS POR MEDIO DE LOS PROFETAS MAYORES:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '27. Isaías I.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/27_EL_CONSEJO_DE_DIOS_POR_MEDIO_DE_LOS_PROFETAS_MAYORES_ISAIAS_I.docx',
                    },
                    {
                        versiculo: '28. Isaías II.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/28_EL_CONSEJO_DE_DIOS_POR_MEDIO_DE_LOS_PROFETAS_MAYORES_ISAIAS_II.docx',
                    },
                    {
                        versiculo: '29. Jeremías.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/29_EL_CONSEJO_DE_DIOS_POR_MEDIO_DE_LOS_PROFETAS_MAYORES_JEREMIAS.docx',
                    },
                    {
                        versiculo: '30. Ezequiel.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/30_EL_CONSEJO_DE_DIOS_POR_MEDIO_DE_LOS_PROFETAS_MAYORES_EZEQUIEL.docx',
                    },
                    {
                        versiculo: '31. Daniel',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/31_EL_CONSEJO_DE_DIOS_POR_MEDIO_DE_LOS_PROFETAS_MAYORES_DANIEL.docx',
                    },
                ],
            },
            {
                id: 'restauracion',
                name: 'EL CONSEJO DE DIOS PARA LA RESTAURACION:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '32. Esdras y Nehemías.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/32_EL_CONSEJO_DE_DIOS_PARA_LA_RESTAURACION_ESDRAS_Y_NEHEMIAS.docx',
                    },
                    {
                        versiculo: '33. Hageo.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/33_EL_CONSEJO_DE_DIOS_PARA_LA_RESTAURACION_HAGEO.docx',
                    },
                    {
                        versiculo: '34. Zacarías.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/34_EL_CONSEJO_DE_DIOS_PARA_LA_RESTAURACION_ZACARIAS.docx',
                    },
                    {
                        versiculo: '35. Malaquías.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/35_EL_CONSEJO_DE_DIOS_PARA_LA_RESTAURACION_MALAQUIAS.docx',
                    },
                ],
            },
            {
                id: 'sabiduria',
                name: 'EL CONSEJO DE DIOS MEDIANTE LA SABIDURÍA:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '36. Job.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/36_EL_CONSEJO_DE_DIOS_MEDIANTE_LA_SABIDURIA_JOB.docx',
                    },
                    {
                        versiculo: '37. Los Salmos.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/37_EL_CONSEJO_DE_DIOS_MEDIANTE_LA_SABIDURIA_LOS_SALMOS.docx',
                    },
                    {
                        versiculo: '38. Los Proverbios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/38_EL_CONSEJO_DE_DIOS_MEDIANTE_LA_SABIDURIA_LOS_PROVERBIOS.docx',
                    },
                    {
                        versiculo: '39. Eclesiastés.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/39_EL_CONSEJO_DE_DIOS_MEDIANTE_LA_SABIDURIA_ECLESIASTES.docx',
                    },
                ],
            },
            {
                id: 'evangelios',
                name: 'EL CONSEJO DE DIOS MEDIANTE LOS EVANGELIOS:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '40. Las Bienventuranzas.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/40_EL_CONSEJO_DE_DIOS_MEDIANTE_LOS_EVANGELIOS_LAS_BIENAVENTURANZAS.docx',
                    },
                    {
                        versiculo: '41. Las Sentencias de Jesús.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/41_EL_CONSEJO_DE_DIOS_MEDIANTE_LOS_EVANGELIOS_LAS_SENTENCIAS_DE_JESUS.docx',
                    },
                    {
                        versiculo: '42. Las Parábolas de Jesús.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/42_EL_CONSEJO_DE_DIOS_MEDIANTE_LOS_EVANGELIOS_LAS_PARABOLAS_DE_JES%C3%9AS.docx',
                    },
                    {
                        versiculo: '43. Las Señales de Jesús.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/43_EL_CONSEJO_DE_DIOS_MEDIANTE_LOS_EVANGELIOS_LAS_SENALES_DE_JES%C3%9AS.docx',
                    },
                    {
                        versiculo: '44. Las Tentaciones de Jesús.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/44_EL_CONSEJO_DE_DIOS_MEDIANTE_LOS_EVANGELIOS_LAS_TENTACIONES_DE_JES%C3%9AS.docx',
                    },
                ],
            },
            {
                id: 'iglesia',
                name: 'EL CONSEJO DE DIOS PARA LA IGLESIA:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '45. El Espíritu Santo.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/45_EL_CONSEJO_DE_DIOS_PARA_LA_IGLESIA_EL_ESPIRITU_SANTO.docx',
                    },
                    {
                        versiculo: '46. Nuestras Congregaciones.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/46_EL_CONSEJO_DE_DIOS_PARA_LA_IGLESIA_NUESTRAS_CONGREGACIONES.docx',
                    },
                    {
                        versiculo: '47. Las Costumbres.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/47_EL_CONSEJO_DE_DIOS_PARA_LA_IGLESIA_LAS_COSTUMBRES.docx',
                    },
                    {
                        versiculo: '48. La Evangelización.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/48_EL_CONSEJO_DE_DIOS_PARA_LA_IGLESIA_LA_EVANGELIZACION.docx',
                    },
                ],
            },
            {
                id: 'fe',
                name: 'EL CONSEJO DE DIOS PARA LA SUSTENTACIÓN DE LA FE:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '49. La Doctrina de la Gracia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/49_EL_CONSEJO_DE_DIOS_PARA_LA_SUSTENTACION_DE_LA_FE_EN%20LA%20DOCTRINA%20DE%20LA%20GRACIA.docx',
                    },
                    {
                        versiculo: '50. La Escatología.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/50_EL_CONSEJO_DE_DIOS_PARA_LA_SUSTENTACION_DE_LA_FE_LA_ESCATOLOGIA.docx',
                    },
                    {
                        versiculo: '51. Los Planes y Proyectos.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/51_EL_CONSEJO_DE_DIOS_PARA_LA_SUSTENTACION_DE_LA_FE_LOS_PLANES_Y_PROYECTOS.docx',
                    },
                    {
                        versiculo: '52. La Celebración.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2022/52_EL_CONSEJO_DE_DIOS_PARA_LA_SUSTENTACION_DE_LA_FE_LA_CELEBRACION.docx',
                    },
                ],
            },
        ],
    },
    {
        title: 'Experimentando a Dios',
        description: 'Conociendo y viviendo en la presencia de Dios',
        emoji: '🕊️',
        content: [
            {
                id: 'Dios',
                name: '01. Dios.',
                icon: 'file' as const,
                pdfPath: '',
            },
            {
                id: 'omnipotente',
                name: '02. El Omnipotente.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/2_MI_EXPERIENCIA_CON_EL_OMNIPOTENTE,_EL_TODOPODEROSO.docx',
            },
            {
                id: 'altisimo',
                name: '03. El Altísimo.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/3_MI_EXPERIENCIA_CON_EL_ALTiSIMO.docx',
            },
            {
                id: 'eterno',
                name: '04. El Dios Eterno.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/4_MI_EXPERIENCIA_CON_EL_DIOS_ETERNO.docx',
            },
            {
                id: 'gloria',
                name: '05. El Dios de Gloria.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/5_MI_EXPERIENCIA_CON_EL_DIOS_DE_GLORIA.docx',
            },
            {
                id: 'rey',
                name: '06. Dios Nuestro Rey.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/6_MI_EXPERIENCIA_CON_DIOS_NUESTRO_REY.docx',
            },
            {
                id: 'defensa-Dios',
                name: '07. La Defensa de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/7_MI_EXPERIENCIA_CON_LA_DEFENSA_DE_DIOS.docx',
            },
            {
                id: 'fortaleza-Dios',
                name: '08. La Fortaleza de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/8_MI_EXPERIENCIA_CON_LA_FORTALEZA_DE_DIOS.docx',
            },
            {
                id: 'libertador',
                name: '09. Dios mi Libertador.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/9_MI_EXPERIENCIA_CON_DIOS_MI_LIBERTADOR.docx',
            },
            {
                id: 'redentor',
                name: '10. Dios mi Redentor.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/10%20_MI_EXPERIENCIA_CON_MI_REDENTOR.docx',
            },
            {
                id: 'resucitado',
                name: '11. Cristo Resucitado.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/11_MI_EXPERIENCIA_CON_EL_RESUCITADO.docx',
            },
            {
                id: 'salvador',
                name: '12. Dios mi Salvador.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/12_MI_EXPERIENCIA_CON_DIOS_MI_SALVADOR.docx',
            },
            {
                id: 'sanador',
                name: '13. Dios mi Sanador.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/13_MI_EXPERIENCIA_CON_DIOS_MI_SANADOR.docx',
            },
            {
                id: 'senior',
                name: '14. Dios mi Señor.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/14_Mi_experiencia_con_Dios_mi_Se%C3%B1or.docx',
            },
            {
                id: 'esperanza',
                name: '15. Dios mi Esperanza.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/15_MI_EXPERIENCIA_CON_DIOS_MI_ESPERANZA.docx',
            },
            {
                id: 'paz',
                name: '16. El Dios de Paz.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/16_MI_EXPERIENCIA_CON_EL_DIOS_DE_PAZ.docx',
            },
            {
                id: 'ejercitos',
                name: '17. El Señor de los Ejercitos.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/17_Mi_experiencia_con_el_Senor_de_los_ejercitos.docx',
            },
            {
                id: 'soberano',
                name: '18. Dios Soberano.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/18_MI_EXPERIENCIA_CON_DIOS_SOBERANO.docx',
            },
            {
                id: 'juez',
                name: '19. Dios el Juez.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/19_MI_EXPERIENCIA_CON_DIOS_EL_JUEZ.docx',
            },
            {
                id: 'Dios-padre',
                name: '20. El Dios de Nuestros Padres.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/20_MI_EXPERIENCIA_CON_EL_DIOS_DE_NUESTROS_PADRES.docx',
            },
            {
                id: 'misericordioso',
                name: '21. Dios Misericordioso.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/20_MI_EXPERIENCIA_CON_EL_DIOS_DE_NUESTROS_PADRES.docx',
            },
            {
                id: 'bondad',
                name: '22. La Bondad de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/22_MI_EXPERIENCIA_CON_LA_BONDAD_DE_DIOS.docx',
            },
            {
                id: 'amor',
                name: '23. El Amor de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/23_MI_EXPERIENCIA_CON_EL_AMOR_DE_DIOS.docx',
            },
            {
                id: 'celos',
                name: '24. Los Celos de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/24_MI_EXPERIENCIA_CON_LOS_CELOS_DE_DIOS.docx',
            },
            {
                id: 'santidad',
                name: '25. La Santidad de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/25_MI_EXPERIENCIA_CON_LA_SANTIDAD_DE_DIOS.docx',
            },
            {
                id: 'fuego',
                name: '26. El Fuego de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/26_MI_EXPERIENCIA_CON_EL_FUEGO_DE_DIOS.docx',
            },
            {
                id: 'luz',
                name: '27. La Luz de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/27_MI_EXPERIENCIA_CON_LA_LUZ_DE_DIOS.docx',
            },
            {
                id: 'dador',
                name: '28. Dios el Dador de Vida.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/28_MI_EXPERIENCIA_CON_DIOS_EL_DADOR_DE_VIDA.docx',
            },
            {
                id: 'fidelidad',
                name: '29. La Fidelidad de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/29_MI_EXPERIENCIA_CON_LA_FIDELIDAD_DE_DIOS.docx',
            },
            {
                id: 'oficios',
                name: '30. Los Oficios de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/30_MI_EXPERIENCIA_CON_LOS_OFICIOS_DE_DIOS.docx',
            },
            {
                id: 'pastoreo',
                name: '31. El Pastoreo de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/31_MI_EXPERIENCIA_CON_EL_PASTOREO_DE_DIOS.docx',
            },
            {
                id: 'primero-ultimo',
                name: '32. Dios el Primero y el Último.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/32_MI_EXPERIENCIA_CON_DIOS_EL_PRIMERO_Y_EL_ULTIMO.docx',
            },
            {
                id: 'yo-soy',
                name: '33. El Yo Soy.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/33_MI_EXPERIENCIA_CON_EL_YO_SOY.docx',
            },
            {
                id: 'verdad',
                name: '34. El Dios de Verdad.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/34_MI_EXPERIENCIA_CON_EL_DIOS_DE_VERDAD.docx',
            },
            {
                id: 'unico',
                name: '35. El Único Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/35_MI_EXPERIENCIA_CON_EL_UNICO_DIOS.docx',
            },
            {
                id: 'escudrinia-Dios',
                name: '36. El Dios que Escudriña.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/36_MI_EXPERIENCIA_CON_DIOS_QUE_ESCUDRINA.docx',
            },
            {
                id: 'revela',
                name: '37. El Dios que Revela.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/37_MI_EXPERIENCIA_CON_DIOS_QUE_REVELA.docx',
            },
            {
                id: 'perdona',
                name: '38. El Dios que Perdona.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/38%20_MI_EXPERIENCIA_CON_EL_DIOS_QUE_PERDONA.docx',
            },
            {
                id: 'consuela',
                name: '39. El Dios que Consuela.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/39_MI_EXPERIENCIA_CON_DIOS_QUE_CONSUELA.docx',
            },
            {
                id: 'padre',
                name: '40. Dios el Padre.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/40_MI_EXPERIENCIA_CON_DIOS_EL_PADRE_(Eli).docx',
            },
            {
                id: 'hijo',
                name: '41. Dios el Hijo.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/41_MI_EXPERIENCIA_CON_DIOS_EL_HIJO_(Daniel).docx',
            },
            {
                id: 'Espiritu-Santo',
                name: '42. Dios Espíritu Santo.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/42_MI_EXPERIENCIA_CON_DIOS_EL_ESPIRITU_SANTO.docx',
            },
            {
                id: 'uno',
                name: '43. Dios Uno.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/43_MI_EXPERIENCIA_CON_DIOS_UNO.docx',
            },
            {
                id: 'alabanza',
                name: '44. El Dios de mi Alabanza.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/44_MI_EXPERIENCIA_CON_EL_DIOS_DE_MI_ALABANZA.docx',
            },
            {
                id: 'amado',
                name: '45. Dios el Amado.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/45_MI_EXPERIENCIA_CON_DIOS_EL_AMADO.docx',
            },
            {
                id: 'amparo',
                name: '46. El Amaparo de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/46_MI_EXPERIENCIA_CON_EL_AMPARO_DE_DIOS.docx',
            },
            {
                id: 'escudo',
                name: '47. El Escudo de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/47_MI_EXPERIENCIA_CON_EL_ESCUDO_DE_DIOS.docx',
            },
            {
                id: 'nombres',
                name: '48. Los nombres de Dios.',
                icon: 'file' as const,
                pdfPath:
                    'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2023/48_MI_EXPERIENCIA_CON_LOS_NOMBRES_DE_DIOS.docx',
            },
        ],
    },
    {
        title: 'Sigamos Adelante en la Misión',
        description: 'Equipamiento para el servicio y la evangelización',
        emoji: '🌍',
        content: [
            {
                id: 'noe',
                name: 'NOÉ:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Avancemos en la Gracia Como Noé.',
                        filePath: '',
                    },
                    {
                        versiculo: '02. Avancemos en la Fé Como Noé.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/02_AVANCEMOS_EN_LA_FE_COMO_NOE.docx',
                    },
                    {
                        versiculo: '03. Avnacemos en la Adoración Como Noé.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/03_AVANCEMOS_EN_LA_ADORACION_COMO_NOE.docx',
                    },
                    {
                        versiculo: '04. Avancemos a un Nuevo Paradigma a Diferencia de Noé.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/03_AVANCEMOS_EN_LA_ADORACION_COMO_NOE.docx',
                    },
                ],
            },
            {
                id: 'abraham',
                name: 'ABRAHAM:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '05. Con Abraham Avanzamos en el Llamado.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/05_CON_ABRAHAM_AVANZAMOS_EN_EL_LLAMADO.docx',
                    },
                    {
                        versiculo: '06. Con Abraham Avanzamos en la Fé.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/06_CON_ABRAHAM_AVANZAMOS_EN_LA_FE.docx',
                    },
                    {
                        versiculo: '07. Con Abraham Avanzamos Sobrellevando Nuestros Errores.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/07_CON_ABRAHAM_AVANZAMOS_SOBRELLEVANDO_NUESTROS_ERRORES.docx',
                    },
                    {
                        versiculo: '08. Con Abraham Avanzamos en Circunstancias Cambiantes.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/08_CON_ABRAHAM_AVANZAMOS_EN_CIRCUNSTANCIAS_CAMBIANTES.docx',
                    },
                    {
                        versiculo: '09. Con Abraham Avanzamos a Través de las Pruebas.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/09_CON_ABRAHAM_AVANZAMOS_A_TRAVES_DE_LAS_PRUEBAS.docx',
                    },
                ],
            },
            {
                id: 'isaac',
                name: 'ISAAC:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '10. Avanzamos con Isaac en la Total Dependencia de Dios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/10_AVANZAMOS_CON_ISAAC_EN_LA_TOTAL_DEPENDENCIA_DE_DIOS.docx',
                    },
                    {
                        versiculo: '11. Avanzamos con Isaac en la Soberanía de Dios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/11_AVANZAMOS_CON_ISAAC_EN_LA_SOBERANIA_DE_DIOS.docx',
                    },
                    {
                        versiculo: '12. Avanzamos con Isaac en la Prosperidad y la Perseverancia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/12_AVANZAMOS_CON_ISAAC_EN_LA_PROSPERIDAD_Y_LA_PERSEVERANCIA.docx',
                    },
                    {
                        versiculo: '13. Avanzamos con Isaac en la Reconciliación.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/13_AVANZAMOS_CON_ISAAC_EN_LA_RECONCILIACION.docx',
                    },
                ],
            },
            {
                id: 'jacob',
                name: 'JACOB:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '14. Avanzamos con Jacob en Busca de la Bendición.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/14_AVANZAMOS_CON_JACOB_EN_BUSCA_DE_LA_BENDICION.docx',
                    },
                    {
                        versiculo: '15. Avanzamos con Jacob en el Cuidado de Nuestra Familia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/14_AVANZAMOS_CON_JACOB_EN_BUSCA_DE_LA_BENDICION.docx',
                    },
                    {
                        versiculo: '16. Avanzamos con Jacob en su independencia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/16_AVANZAMOS_CON_JACOB_EN_SU_INDEPENDENCIA',
                    },
                    {
                        versiculo: '17. Avanzamos con Jacob en Nuestra Lucha con Dios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/17_AVANZAMOS_CON_JACOB_EN_NUESTRA_LUCHA_CON_DIOS.docx',
                    },
                    {
                        versiculo: '18. Avanzamos con Jacob en Nuestras Crisis.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/18_AVANCEMOS_CON_JACOB_EN_NUESTRAS_CRISIS.docx',
                    },
                ],
            },
            {
                id: 'jose',
                name: 'JOSÉ:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '19. Avancemos con José Cuando se Rompen los Sueños.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/19_AVANCEMOS_CON_JOSE_CUANDO_SE_ROMPEN_LOS_SUENOS.docx',
                    },
                    {
                        versiculo: '20. Avancemos con José el Camino de la Integridad.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/20_AVANCEMOS_CON_JOSE_EL_CAMINO_DE_LA_INTEGRIDAD.docx',
                    },
                    {
                        versiculo: '21. Avancemos con José en la Interpretación.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/21_AVANCEMOS_CON_JOSE_%20EN_LA_INTERPRETACION.docx',
                    },
                    {
                        versiculo: '22. Avancemos con José en el Cierre de un Ciclo.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/22_AVANCEMOS_CON_JOSE_EN_EL_CIERRE_DE_UN_CICLO.docx',
                    },
                ],
            },
            {
                id: 'moises',
                name: 'MOISÉS:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '23. Avancemos con Moisés en el Origen del Éxodo.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/23_AVANCEMOS_CON_MOISES_EN_EL_ORIGEN_DEL_EXODO.docx',
                    },
                    {
                        versiculo: '24. Avancemos con Moisés en su Llamado.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/24_AVANCEMOS_CON_MOISES_EN_SU_LLAMADO.docx',
                    },
                    {
                        versiculo: '25. Avancemos con Moisés con la Vara de Dios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/25_AVANCEMOS_CON_MOISES_CON_LA_VARA_DE_DIOS.docx',
                    },
                    {
                        versiculo: '26. Avancemos con Moisés en el Desierto.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/26_AVANCEMOS_CON_MOISES_EN_EL_DESIERTO.docx',
                    },
                    {
                        versiculo: '27. Avancemos en Nuestro Sacerdocio Levítico.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/27_AVANCEMOS_EN_NUESTRO_SACERDOCIO_CON_LEVTICO.docx',
                    },
                    {
                        versiculo: '28. Avancemos en la Presencia de Dios con Números.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/27_AVANCEMOS_EN_NUESTRO_SACERDOCIO_CON_LEVTICO.docx',
                    },
                    {
                        versiculo: '29. Avancemos Profundizando los Diez Mandamientos.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/29_AVANCEMOS_PROFUNDIZANDO_LOS_DIEZ_MANDAMIENTOS.docx',
                    },
                    {
                        versiculo: '30. Avancemos en el Camino de Deuteronomio.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/30_AVANCEMOS_EN_EL_CAMINO_DE_DEUTERONOMIO.docx',
                    },
                ],
            },
            {
                id: 'josue',
                name: 'JOSUÉ:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '31. Avancemos con Josué en los Preparativos.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/31_AVANCEMOS_CON_JOSUE_EN_LOS_PREPARATIVOS.docx',
                    },
                    {
                        versiculo: '32. Avancemos con Josué en la conquista de Jericó.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/32_AVANCEMOS_CON_JOSUE_EN_LA_CONQUISTA_DE_JERICO.docx',
                    },
                    {
                        versiculo: '33. Avancemos con Josué Superando los Obstáculos.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/33_AVANCEMOS_CON_JOSUE_SUPERANDO_OBSTACULOS.docx',
                    },
                    {
                        versiculo: '34. Avancemos con Josué Animando a la Gente.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/34_AVANCEMOS_CON_JOSUE_ANIMANDO_A_LA_GENTE.docx',
                    },
                ],
            },
            {
                id: 'jueces-ruth',
                name: 'JUECES Y RUTH:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '35. Avancemos Corrigiendo el Rumbo.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/35_AVANCEMOS_CORRIGIENDO_EL_RUMBO.docx',
                    },
                    {
                        versiculo: '36. Avancemos Marcando con Poder.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/36_AVANCEMOS_MARCHANDO_CON_PODER.docx',
                    },
                    {
                        versiculo: '37. Avancemos Siguiendo las Señales.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/37_AVANCEMOS_SIGUIENDO_LAS_SEnALES.docx',
                    },
                    {
                        versiculo: '38. Avancemos Evitando los Peligros.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/38_AVANCEMOS_EVITANDO_LOS_PELIGROS.docx',
                    },
                    {
                        versiculo: '39. Avancemos en la Virtud con el Ejemplo de Ruth.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/39_AVANCEMOS_EN_LA_VIRTUD_CON_EL_EJEMPLO_DE_RUT.docx',
                    },
                ],
            },
            {
                id: 'samuel-saul',
                name: 'SAMUEL Y SAÚL:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '40. Avancemos en el Canto Profético de Ana.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/40_AVANCEMOS_EN_EL_CANTO_PROFETICO_DE_ANA.docx',
                    },
                    {
                        versiculo: '41. Avancemos en el Crecimiento Personal com Samuel.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/41_AVANCEMOS_EN_EL_CRECIMIENTO_PERSONAL_COMO_SAMUEL.docx',
                    },
                    {
                        versiculo: '42. Avancemos en nuestro Ministerio como Samuel.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/42_AVANCEMOS_EN_NUESTRO_MINISTERIO_COMO_SAMUEL.docx',
                    },
                    {
                        versiculo: '43. Avancemos Aceptando los Cambios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/43_AVANCEMOS_ACEPTANDO_LOS_CAMBIOS.docx',
                    },
                    {
                        versiculo: '44. Avancemos en el Camino Trazado por Dios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/44_AVANCEMOS_EN_EL_CAMINO_TRAZADO_POR_DIOS.docx',
                    },
                    {
                        versiculo: '45. Avancemos en el Camino de la Confirmación.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/45_AVANCEMOS_EN_EL_CAMINO_DE_LA_CONFIRMACION.docx',
                    },
                ],
            },
            {
                id: 'anio-nuevo',
                name: 'MIRANDO AL NUEVO AÑO:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '46. Avancemos aprendiendo de la Navidad.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/46_AVANCEMOS_APRENDIENDO_DE_LA_NAVIDAD.docx',
                    },
                    {
                        versiculo: '47. Avancemos según el Propósito de Dios',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2024/47_AVANCEMOS_SEGUN_EL_PROPOSITO_DE_DIOS.docx',
                    },
                ],
            },
        ],
    },
    {
        title: 'Levántate y Edifica tu Nueva Vida',
        description: 'Recursos para el nuevo creyente y crecimiento espiritual',
        emoji: '🌱',
        content: [
            {
                id: 'levantate-vida',
                name: 'LEVANTATE Y EDIFICA TU NUEVA VIDA:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '01. Soñando.',
                        filePath: '',
                    },
                    {
                        versiculo: '02. Preparandote.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/2_EDIFICA_TU_NUEVA_VIDA_PREPARATE.docx',
                    },
                    {
                        versiculo: '03. Entrenandote.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/3_EDIFICA_TU_NUEVA_VIDA_ENTRENANDOTE.docx',
                    },
                    {
                        versiculo: '04. Celebrando.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/4_EDIFICA_TU_NUEVA_VIDA_CELEBRANDO.docx',
                    },
                ],
            },
            {
                id: 'levantate-preguntas',
                name: 'EDIFICADOS POR LA PREGUNTAS:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '05. Aprender de las Preguntas de Dios.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/5_APRENDER_DE_LAS_PREGUNTAS_DE_DIOS.docx',
                    },
                    {
                        versiculo: '06. Las Preguntas de Jesús.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/6_PREGUNTAS_DE_JESuS.docx',
                    },
                    {
                        versiculo: '07. Mas Preguntas de Jesús.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/7_MAS_PREGUNTAS_DE_JESuS.docx',
                    },
                    {
                        versiculo: '08. Las Preguntas de Pablo.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/8_LAS_PREGUNTAS_DE_PABLO.docx',
                    },
                    {
                        versiculo: '09. La Preguntas que Cambian Vidas',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/9_PREGUNTAS_QUE_CAMBIAN_VIDAS.docx',
                    },
                ],
            },
            {
                id: 'levantate-familia',
                name: 'LEVANTATE Y EDIFICA TU FAMILIA:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '10. Soñar en Familia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/10_SOnAR_EN_FAMILIA.docx',
                    },
                    {
                        versiculo: '11. Orar en Familia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/11_ORAR_EN_FAMILIA.docx',
                    },
                    {
                        versiculo: '12. El Arte de Invitar y Ser Invitado.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/12_EL_ARTE_DE_INVITAR_Y_SER_INVITADO.docx',
                    },
                    {
                        versiculo: '13. La Gracia de Contactar.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/13_LA_GRACIA_DE_CONTACTAR.docx',
                    },
                    {
                        versiculo: '14. Preparar en Familia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/14_PREPARAR_A_LA_FAMILIA.docx',
                    },
                    {
                        versiculo: '15. Compartir en Familia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/15_COMPARTIR_EN_FAMILIA.docx',
                    },
                    {
                        versiculo: '16. Progresar en Familia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/16_PROGRESAR_EN_FAMILIA.docx',
                    },
                    {
                        versiculo: '17. Celebrar en Familia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/17_CELEBRAR_EN_FAMILIA.docx',
                    },
                ],
            },
            {
                id: 'levantate-relaciones',
                name: 'LEVANTATE Y EDIFICA RELACIONES:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '18. Edificar Relaciones.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/18_EDIFICAR_RELACIONES.docx',
                    },
                    {
                        versiculo: '19. Edificar por Medio de Realciones Imprevistas.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/19_EDIFICAR_POR_MEDIO_DE_RELACIONES_IMPREVISTAS.docx',
                    },
                    {
                        versiculo: '20. Edifica las Relaciones en las Pruebas.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/20_EDIFICA_LAS_RELACIONES_EN_LAS_PRUEBAS.docx',
                    },
                    {
                        versiculo: '21. Edificar Relaciones para un cambio de Paradigma.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/21_EDIFICAR_RELACIONES_PARA_UN_CAMBIO_DE_PARADIGMA.docx',
                    },
                    {
                        versiculo: '22. Edifica Relaciones Multiformes.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/22_EDIFICA_RELACIONES_MULTIFORMES.docx',
                    },
                ],
            },
            {
                id: 'levantate-grupo',
                name: 'LEVANTATE Y EDIFICA TU GRUPO E IGLESIA:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '23. Soñar con el Crecimiento.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/23_SOnAR_CON_EL_CRECIMIENTO.docx',
                    },
                    {
                        versiculo: '24. Invitar para el Crecimiento.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/23_SOnAR_CON_EL_CRECIMIENTO.docx',
                    },
                    {
                        versiculo: '25. Contactar para el Crecimiento.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/25_CONTACTAR_PARA_EL_CRECIMIENTO.docx',
                    },
                    {
                        versiculo: '26. Preparar para Crecer.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/26_PREPARAR_PARA_CRECER.docx',
                    },
                    {
                        versiculo: '27. Entrenar para Crecer.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/27_ENTRENAR_PARA_CRECER.docx',
                    },
                    {
                        versiculo: '28. Celebrar para Crecer.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/28_CELEBRAR_PARA_CRECER.docx',
                    },
                    {
                        versiculo: '29. Progresar para Crecer.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/29_PROGRESAR_PARA_CRECER.docx',
                    },
                ],
            },
            {
                id: 'levantate-relaciones',
                name: 'LEVANTATE Y EDIFICA RELACIONES:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '30. Edificar Relaciones Poderosas.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/30_EDIFICA_RELACIONES_PODEROSAS.docx',
                    },
                    {
                        versiculo: '31. Edificar Relaciones Estables.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/30_EDIFICA_RELACIONES_PODEROSAS.docx',
                    },
                    {
                        versiculo: '32. Edificar Relaciones Justas.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/30_EDIFICA_RELACIONES_PODEROSAS.docx',
                    },
                    {
                        versiculo: '33. Edificar Relaciones Eternas.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/30_EDIFICA_RELACIONES_PODEROSAS.docx',
                    },
                    {
                        versiculo: '34. El Dios de Verdad.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/34_EDIFICA_RELACIONES_ETERNAS.docx',
                    },
                ],
            },
            {
                id: 'levantate-provincia',
                name: 'LEVANTATE Y EDIFICA TU PROVINCIA:',
                icon: 'folder' as const,
                pdfs: [
                    {
                        versiculo: '35. Soñar con una Provincia Transformada.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/35_SOnAR_UNA_PROVINCIA_TRANSFORMADA.docx',
                    },
                    {
                        versiculo: '36. Orar por la Provincia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/36_ORAR_POR_LA_PROVINCIA.docx',
                    },
                    {
                        versiculo: '37. Invitar en la Provincia.',
                        filePath:
                            'https://www.pueblonuevobautista.com.ar/3material/Bosquejos_2025/37_INVITAR_EN_LA_PROVINCIA.docx',
                    },
                ],
            },
        ],
    },
    {
        title: 'GIGANTES DE LA FE',
        description: 'Guía de oración inspirada en los grandes héroes de la fe.',
        emoji: '💪',
        content: [
            {
                id: 'gigantes-exodo',
                name: '01. GIGANTES DE LA FE: Éxodo 3:5-6.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_1.pdf',
            },
            {
                id: 'gigantes-genesis',
                name: '02. GIGANTES DE LA FE: Génesis 22:7-8 y 31:42.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_2.pdf',
            },
            {
                id: 'gigantes-exodo',
                name: '03. GIGANTES DE LA FE: Éxodo 15:1-6.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_3.pdf',
            },
            {
                id: 'gigantes-jabes',
                name: '04. GIGANTES DE LA FE: Jabes 1° Crónicas 4:9-10.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_3.pdf',
            },
            {
                id: 'gigantes-jueces',
                name: '05. GIGANTES DE LA FE: Jueces 4:1-3.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_5.pdf',
            },
            {
                id: 'gigantes-samuel',
                name: '06. GIGANTES DE LA FE: Samuel 12:21-25.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_6.pdf',
            },
            {
                id: 'gigantes-reyes',
                name: '07. GIGANTES DE LA FE: 1° Reyes 18: 36-42.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_7.pdf',
            },
            {
                id: 'gigantes-isaias',
                name: '08. GIGANTES DE LA FE: Isaías 9: 2-7.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_7.pdf',
            },
            {
                id: 'gigantes-isaias2',
                name: '09. GIGANTES DE LA FE: Isaías 56:7.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_9.pdf',
            },
            {
                id: 'gigantes-esdras',
                name: '10. GIGANTES DE LA FE: Esdras 5:13-17.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_10.pdf',
            },
            {
                id: 'gigantes-nehemias',
                name: '11. GIGANTES DE LA FE: Nehemías 1:11.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_11.pdf',
            },
            {
                id: 'gigantes-alabanza',
                name: '12. GIGANTES DE LA FE: Alabanza extrema, Ana, Simeón, María.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_12.pdf',
            },
            {
                id: 'gigantes-aprendemos',
                name: '13. GIGANTES DE LA FE: Aprendemos de Jesús.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_13.pdf',
            },
            {
                id: 'gigantes-discipulos',
                name: '14. GIGANTES DE LA FE: Oramos con los primeros discípulos.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_14.pdf',
            },
            {
                id: 'gigantes-evangelio',
                name: '15. GIGANTES DE LA FE: Llenar todo del evangelio.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Gigantes/Orando_Gigantes_15.pdf',
            },
        ],
    },
    {
        title: 'MAS QUE VENCEDORES',
        description: 'Oraciones para superar cada desafío y vivir en victoria.',
        emoji: '🏆',
        content: [
            {
                id: 'venciendo-tentacion',
                name: '01. Venciendo la Tentación.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Mas_que_Vencedores/1_Guia_Oracion.pdf',
            },
            {
                id: 'venciendo-corrucion',
                name: '02. Venciendo la Corrupción.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Mas_que_Vencedores/2_Guia_oracion.pdf',
            },
            {
                id: 'venciendo-ignorancia',
                name: '03. Venciendo la Ignorancia.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Mas_que_Vencedores/3_Guia_Oracion.pdf',
            },
            {
                id: 'venciendo-temor',
                name: '04. Venciendo el Temor.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Mas_que_Vencedores/4_Guia_Oracion.pdf',
            },
            {
                id: 'venciendo-aislamiento',
                name: '05. Venciendo el Aislamiento.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Mas_que_Vencedores/4_Guia_Oracion.pdf',
            },
            {
                id: 'venciendo-rencor',
                name: '06. Venciendo el Rencor.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Mas_que_Vencedores/6_Guia_Oracion.pdf',
            },
            {
                id: 'venciendo-oscuridad',
                name: '07. Venciendo la Oscuridad.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Mas_que_Vencedores/7_Guia_Oracion.pdf',
            },
            {
                id: 'venciendo-soberbia',
                name: '08. Venciendo la Soberbia.',
                icon: 'file' as const,
                pdfPath: 'https://www.pueblonuevobautista.com.ar/3material/G_O_Mas_que_Vencedores/8_Guia_Oracion.pdf',
            },
        ],
    },
]

// import { db } from './db/'
// import { sections, items, pdfs } from './db/schema'

// async function main() {
//     for (const section of sectionsData) {
//         const [newSection] = await db
//             .insert(sections)
//             .values({ title: section.title, description: section.description, emoji: section.emoji })
//             .returning()

//         for (const item of section.content) {
//             const [newItem] = await db
//                 .insert(items)
//                 .values({ name: item.name, type: item.icon, sectionId: newSection.id })
//                 .returning()

//             if (item.icon === 'file') {
//                 await db.insert(pdfs).values({ itemId: newItem.id, name: item.name, url: item.pdfPath })
//             } else {
//                 for (const itemPdf of item.pdfs) {
//                     await db.insert(pdfs).values({ itemId: newItem.id, name: itemPdf.versiculo, url: itemPdf.filePath })
//                 }
//             }
//         }
//     }
// }

// main()
