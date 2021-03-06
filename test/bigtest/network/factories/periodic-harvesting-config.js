import { Factory } from '@bigtest/mirage';

export default Factory.extend({
  startAt: () => '2019-01-01T08:00:00.000+0000',
  interval: () => 'daily',
  lastTriggeredAt: () => '2019-03-24T08:00:00.000+0000'
});
