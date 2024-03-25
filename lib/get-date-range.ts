import { SEASON } from "@/types/enums";

export const getDateRange = (params: { season?: string; year?: string }) => {
    if (!params.season && !params.year) {
        return {
            startDate: undefined,
            endDate: undefined,
        };
    }

    const currentYear = new Date().getFullYear().toString();
    const year =
        params.year && params.year.length === 4 && params.year.match(/^-?\d+$/)
            ? params.year
            : currentYear;

    if (!params.season) {
        return {
            startDate: year + "-01-01",
            endDate: year + "-12-31",
        };
    }

    let startDate, endDate;

    switch (params.season) {
        case SEASON.SPRING:
            startDate = year + "-03-01";
            endDate = year + "-05-31";
            break;
        case SEASON.SUMMER:
            startDate = year + "-06-01";
            endDate = year + "-08-31";
            break;
        case SEASON.FALL:
            startDate = year + "-09-01";
            endDate = year + "-11-30";
            break;
        // REFACTOR FILTER BY WINTER SEASON
        case SEASON.WINTER:
            startDate = year + "-12-01";
            endDate = year === currentYear ? year + "-12-31" : `${Number(year) + 1}-02-28`
            break;
        default:
            startDate = undefined;
            endDate = undefined;
    }

    return {
        startDate,
        endDate,
    };
};