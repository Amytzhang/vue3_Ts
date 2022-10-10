<template>
   <div class="interview-content">
    <div @click="say()">{{message}}</div>
    <Select v-model="model" filterable allow-create @on-create="handleCreate1">
      <Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
   </div>
</template>
<script>
import hello from '../mixins/hello'
    export default {
      name: 'interview',
      mixins: [hello],
        data () {
            return {
                cityList3: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                cityList4: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model: '',
                model1: []
            }
        },
        // components: {
        //   Select
        // },
        methods: {
            handleCreate1 (val) {
                this.cityList3.push({
                    value: val,
                    label: val
                });
            },
            handleCreate2 (val) {
                this.cityList4.push({
                    value: val,
                    label: val
                });
            }
        }
    }
</script>
<style >
  .interview-content{
    width: 200px;
    height: 500px;
   
  }
</style>

