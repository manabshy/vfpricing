export const VF_CONFIG_DB = {
  usageConfigData: {
    Voice: {
      labels: {
        y: 'Minutes',
        x: 'Date',
        title: 'Voice Trend',
      },
    },
    Trend: {
      labels: {
        x: 'Date',
        y: 'Mb',
        title: 'Data Trend',
      },
    },
    Spend: {
      labels: {
        y: 'Minutes',
        x: 'Date',
        title: 'Spend Trend',
      },
    },
    CTNs: {
      labels: {
        y: 'Minutes',
        x: 'Date',
        title: 'CTNs Trend',
      },
    },
  },
  usageColumn: [
    {
      attribute: 'type',
      label: 'Region',
    },
    {
      attribute: 'annual',
      label: 'Annual Avg.',
    },
    {
      attribute: '3months',
      label: 'last 3 month',
    },
    {
      attribute: 'change',
      label: 'change (%)',
    },
    {
      attribute: 'diff',
    },
  ],
};


export const Stepper_const = [
  { label: 'Customer info', step: 0, checked: false },
  { label: 'Investment & Connections', step: 1, checked: false },
  { label: 'Configure', step: 2, checked: false },
  { label: 'Tariff Recommendation', step: 3, checked: false },
];