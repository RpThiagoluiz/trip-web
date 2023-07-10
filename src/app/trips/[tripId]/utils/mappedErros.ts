export const MAPPED_ERROS = {
  'RSV-001': {
    field: 'startDate',
    message: 'Start date is invalid',
  },
  'RSV-002': {
    field: 'endDate',
    message: 'End date is invalid',
  },
  'RSV-003': {
    field: 'bothDate',
    message: 'This date is reserved',
  },
} as const;
