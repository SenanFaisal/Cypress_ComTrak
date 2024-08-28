describe('Google Login Test', () => {
    it('login', () => {
        let token = 'nIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzZW5hbmYubWF0QGRtY2xpbmljYWwuY29tIiwianRpIjoiYjZlMzkxY2ItNDBlZC00MWY3LWEzNmMtOTNiNzVhNTc2ODI0IiwiaWF0IjoxNzI0ODIzMzU1LCJyb2wiOiJhcGlfYWNjZXNzIiwiaWQiOiIyMDMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNZW1iZXIiLCJuYmYiOjE3MjQ4MjMzNTQsImV4cCI6MTcyNDg1OTM1NCwiaXNzIjoiRG1jciIsImF1ZCI6Imh0dHBzOi8vYXRvbS5zdGFnZS5kbWNsaW5pY2FsLmNvbS8ifQ.iuVsvehyqKYqQYDm7XmlbdXXJD6kpc3Zl25wbo5NuFk'
        // const userCredentials = {
        //     "user": {
        //         "email": "senanf.mat@dmclinical.com",
        //         "password": "Baskarjkjk@2"
        //     }
        // };

        // const bodyRequest = {
        //     "bodyTest": {
        //         "id": "110016544418171170310",
        //         "email": "senanf.mat@dmclinical.com",
        //         "name": "Senan Faisal",
        //         "image": "https://lh3.googleusercontent.com/a/ACg8ocJvSbvCDGmovqnRn4Z017bVyX5CwTedobruN2SHXcMBsD4oPw=s96-c",
        //         "accessToken": "ya29.a0AcM612zL6eVmopaW2PvIM6mwqC37HJapU6LdnBiEQVw35CgVX1SQC0sCHif7wMzSn-8VJeTsD6BQUMo-GallrJXF9Bsjnb8zFgbWukk17ypg28F76XKd5RloC9LoIGg5JwS_8T-09aoUw5-lMLKHlpfN3RPddBaje5MqaCgYKAeoSARASFQHGX2MiDQ0VX_tNpn6Vo_Nxrxu3ow0171",
        //         "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0OTM5MWJmNTJiNThjMWQ1NjAyNTVjMmYyYTA0ZTU5ZTIyYTdiNjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjg3MTk5NDE0NjkzLWM0b2NmNmJzbGltaDJtZmlwYmlyNW82Zmlpb2Zncmt1LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjg3MTk5NDE0NjkzLWM0b2NmNmJzbGltaDJtZmlwYmlyNW82Zmlpb2Zncmt1LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEwMDE2NTQ0NDE4MTcxMTcwMzEwIiwiaGQiOiJkbWNsaW5pY2FsLmNvbSIsImVtYWlsIjoic2VuYW5mLm1hdEBkbWNsaW5pY2FsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoidV8zSjlUTlNIdy0ySEpURW9oYjBaZyIsIm5iZiI6MTcyNDc0NDIwMSwibmFtZSI6IlNlbmFuIEZhaXNhbCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKdlNidkNER21vdnFuUm40WjAxN2JWeVg1Q3dUZWRvYnJ1TjJTSFhjTUJzRDRvUHc9czk2LWMiLCJnaXZlbl9uYW1lIjoiU2VuYW4iLCJmYW1pbHlfbmFtZSI6IkZhaXNhbCIsImlhdCI6MTcyNDc0NDUwMSwiZXhwIjoxNzI0NzQ4MTAxLCJqdGkiOiIyODU2NGNmOWU3MjQ1ZTA4NWI4OGI5N2U4ZjMzOGY5NjRlNmU5M2QwIn0.CL3LJJwVklQ0e467EonNNw0Of3joSTPUZaA-tiUInGcxoibKTXx5lo8jZvSs2idx94Yff1hhPCKrXKe_dwaGLESJyHZx6JeOb9BPQ7nxwAu5N4j40CWA78N8ky6nWBmAjW29V40OymqDzlbbfxk1VkRQAK9BeiHv2c6CWAzO1__xQKDJeRP--3yLAlJh8DCO3P1LBelS87I8clX_X8bgaozCbVZMS8uHIXNteVwuI114380y8OIpZo5IDTdepU14dp0dZrPM3aOz_4k1v-4tyftlBppw-whaBjD_Z1LF0Eny69ELBqa-x95jJpgEqS0IdazTO2vqTRM8RY-GjlLUmg"
        //     }
        // };

        cy.request({
            method: 'GET',
            url: 'https://dmclinical-staging-backend-atom.azurewebsites.net/api/v1/Lead/LeadHistory',
            headers: {
                'Authorization': `Bearer ${token}`,
            },

        });
        cy.request({
            method: 'GET',
            url: 'https://dmclinical-staging-backend-atom.azurewebsites.net/api/v1/Lead/LeadCampaigns',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });


        cy.request({
            method: 'GET',
            url: 'https://dmclinical-staging-backend-atom.azurewebsites.net/api/v1/Opportunity/GetAllStatuses',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    });

});


//********************************************
