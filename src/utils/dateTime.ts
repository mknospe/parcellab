import format from 'date-fns/format';

export function formatDateTime(timestamp: string): string {
    return format(new Date(timestamp), 'dd.MM.yyyy, H:mm');
}
