<template>
    <div class="xlbox">
        <select class="dqxl" v-model="prov">
            <option v-for="option in arr" :value="option.name" :key="option.name">
                {{ option.name }}
            </option>
        </select>
        <select class="dqxl" v-model="city">
            <option v-for="option in cityArr" :value="option.name" :key="option.name">
                {{ option.name }}
            </option>
        </select>
        <select class="dqxl" v-model="district" v-if="district!=''">
            <option v-for="option in districtArr" :value="option.name" :key="option.name">
                {{ option.name }}
            </option>
        </select>
    </div>
</template>

<script type="text/babel">

import arrAll from "./data.js";

export default {
    // 对外传入传出的参数
    // props: ['result'],
    // 当前页面中的Model
    data() {
        return {
            arr: arrAll,
            prov: '选择省份',
            city: '请选择',
            district: '',
            cityArr: [],
            districtArr: []
        }
    },
    methods: {
        updateCity: function () {
            // 遍历所有省份
            // 这里的 i 就是 index 从 0 开始
            for (var i in this.arr) {
                var obj = this.arr[i]; // 取到当前对应省价实体
                if (obj.name == this.prov) { // 如果当前省份名称 == 所选的省份名称
                    this.cityArr = obj.sub; // 取当前省价下的sub数组，也就是它的城市信息
                    break;
                }
            }
            if(this.cityArr && this.cityArr.length>1)
            {
                this.city = this.cityArr[1].name; // 在City上显示所选省份的第一个城市
            }
            else{
                this.city = this.cityArr[0].name;
            }
        },
        updateDistrict: function () {
            for (var i in this.cityArr) {
                var obj = this.cityArr[i];
                if (obj.name == this.city) {
                    this.districtArr = obj.sub;
                    break;
                }
            }
            if (this.districtArr && this.districtArr.length > 1 && this.districtArr[1].name) {
                this.district = this.districtArr[1].name;
            } else {
                this.district = '';
            }
            // XZ增加输出参数，用于显示选择的结果
            var result = this.prov + "," + this.city + "," + this.district;
            this.$emit("update:result", result);
        }
    },
    beforeMount: function () {
        this.updateCity();
        this.updateDistrict();
    },
    watch: {
        prov: function () {
            this.updateCity();
            this.updateDistrict();
        },
        city: function () {
            this.updateDistrict();
        }
    }
}
</script>
