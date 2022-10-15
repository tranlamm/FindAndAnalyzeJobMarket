export const analyzeLocation = (data) => {
    const locations = data.location;
    if (locations) {
        const labels = [];
        const datas = [];
        const backgroundColor = [];
        locations.forEach((location) => {
            labels.push(location.name);
            const quantity = location.quantity;
            datas.push(Number(quantity.slice(1, quantity.length - 1)));
            backgroundColor.push('#' + Math.floor(Math.random() * 16777215).toString(16));
        });
        const datasets = [
            {
                label: 'Amount of recruitments',
                data: datas,
                backgroundColor,
            },
        ];

        return { labels, datasets };
    } else return {};
};

export const analyzeCareer = (data) => {
    const jobs = data.job;
    if (jobs) {
        const labels = [];
        const datas = [];
        const backgroundColor = [];
        jobs.forEach((job) => {
            const { list } = job;
            const quantity = list.reduce((sum, subJob) => {
                const count = Number(subJob.quantity.slice(1, subJob.quantity.length - 1));
                return sum + count;
            }, 0);
            labels.push(job.name);
            datas.push(quantity);
            backgroundColor.push('#' + Math.floor(Math.random() * 16777215).toString(16));
        });
        const datasets = [
            {
                label: 'Careers',
                data: datas,
                backgroundColor,
            },
        ];
        return { labels, datasets };
    } else return {};
};

export const analyzeJob = (data) => {
    const jobs = data.job;
    if (jobs) {
        const labels = [];
        const datas = [];
        const backgroundColor = [];
        jobs.forEach((job) => {
            const list = job.list;
            list.forEach((subJob) => {
                labels.push(subJob.detailName);
                datas.push(Number(subJob.quantity.slice(1, subJob.quantity.length - 1)));
                backgroundColor.push('#' + Math.floor(Math.random() * 16777215).toString(16));
            });
        });
        const datasets = [
            {
                label: 'Careers',
                data: datas,
                backgroundColor,
            },
        ];
        return { labels, datasets };
    } else return {};
};

export const analyzeIt = (data) => {
    if (data.length) {
        const labels = [];
        const datas = [];
        const backgroundColor = [];
        data.forEach((skill) => {
            const { name, amount } = skill;
            labels.push(name);
            datas.push(amount);
            backgroundColor.push('#' + Math.floor(Math.random() * 16777215).toString(16));
        });
        const datasets = [
            {
                label: 'Quantity',
                data: datas,
                backgroundColor,
            },
        ];
        return { labels, datasets };
    } else return {};
};
