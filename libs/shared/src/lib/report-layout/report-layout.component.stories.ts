import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ReportLayoutComponent } from './report-layout.component';
import { NgChartsModule } from 'ng2-charts';

export default {
  title: 'ReportLayoutComponent',
  component: ReportLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, NgChartsModule],
    }),
  ],
} as Meta<ReportLayoutComponent>;

const Template: Story<ReportLayoutComponent> = (
  args: ReportLayoutComponent
) => ({
  props: { ...args },
});

export const Defualt = Template.bind({});

Defualt.args = {
  config: {
    graphData: {
      chartData: {
        datasets: [
          { data: [55, 50, 55, 50, 55, 50, 40], label: 'Legend 1' },
          { data: [50, 55, 50, 55, 50, 55, 40], label: 'Legend 2' },
          { data: [5, 5, 5, 5, 5, 5, 5], label: 'Legend 3' },
        ],
      },
      chartLegend: true,
      chartType: 'line',
      labels: ['0', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx'],
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: 'Your Title',
              color: '#00000',
              padding: 10,
              font: {
                size: 16,
                weight: '700',
              },
            },
          },
          x: {
            title: {
              display: true,
              text: 'Your Title',
              color: '#00000',
              padding: 10,
              font: {
                size: 16,
                weight: '700',
              },
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Graph Title',
            color: '#00000',
            font: {
              size: 24,
              weight: '700',
            },
          },
          legend: {
            position: 'top',
            align: 'start',
            labels: {
              padding: 40,
              usePointStyle: true,
            },
          },
        },
      },
    },
    tableData: {
      column: ['region', 'annual avg.', 'last 3 month', 'change (%)'],
      rowData: [
        {
          region: 'National',
          'annual avg.': '200 mins',
          'last 3 month': '400 mins',
          'change (%)': '+ 32%',
          status: 0,
        },
        {
          region: 'Internation',
          'annual avg.': '200 mins',
          'last 3 month': '400 mins',
          'change (%)': '- 32%',
          status: 1,
        },
        {
          region: 'Roaming',
          'annual avg.': '200 mins',
          'last 3 month': '400 mins',
          'change (%)': '+ 32%',
          status: 2,
        },
      ],
    },
  },
};
