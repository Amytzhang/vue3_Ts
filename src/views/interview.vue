<template>
   <div class="interview-content">
    <div class="active-click" @click="say()">{{message}}</div>
    <Select v-model="model" filterable allow-create @on-create="handleCreate1" style="width:10rem;">
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
<style lang="scss" scoped>
  .interview-content{
    width: 100%;
    height: 100%;
    padding: 10rem 5rem;
   .active-click{
      height: 4rem;
      line-height: 4rem;
      font-size: 16px;
      font-weight: 600;
      &:active{
        color: burlywood;
      }
   }
  }
</style>

