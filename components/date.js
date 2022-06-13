import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    console.log("aaa")
    console.log(dateString)
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'yyyy')}</time>;
}
