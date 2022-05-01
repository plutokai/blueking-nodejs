<template>
<div>
    <div class="input-search">
        <bk-input class="input" :clearable="true" v-model="value" :show-clear-only-hover="true" @clear="handleSearch" @enter="handleSearch"></bk-input>
        <bk-button :theme="'primary'" :title="'搜索'" class="mr10" @click="handleSearch">搜索</bk-button>
    </div>
    <div>
        <bk-table :data="tableData" :max-height="390" ref="table">
            <bk-table-column label="名称" prop="name"></bk-table-column>
            <bk-table-column label="内网IP" prop="ip"></bk-table-column>
            <bk-table-column label="来源" prop="source"></bk-table-column>
            <bk-table-column label="状态" prop="status"></bk-table-column>
            <bk-table-column label="创建时间" prop="create_time"></bk-table-column>
        </bk-table>
    </div>
    <bk-pagination
        class="mt20"
        :current.sync="defaultPaging.current"
        :count.sync="defaultPaging.count"
        :limit="defaultPaging.limit"
        @limit-change="handleLimitChange"
        @change="handlePageChange">
    </bk-pagination>
</div>
</template>
<script>
    // import { bkInput } from 'bk-magic-vue'

    export default {
        // components: {
        //     bkInput
        // },
        data () {
            return {
                value: '',
                tableData: [],
                defaultPaging: {
                    current: 1,
                    limit: 10,
                    count: 0
                },
            }
        },
        methods:{
            getMagicTableData(){
                this.$store.dispatch('example/getMagicTableData',{
                    page: this.defaultPaging.current,
                    page_size: this.defaultPaging.limit,
                    value: this.value
                }).then(res =>{
                console.log(res, '----')
                this.tableData = res.data.list
                this.defaultPaging.count = res.data.total
                })
            },
            handleLimitChange(limit){
                this.defaultPaging.current = 1
                this.defaultPaging.limit = limit
                this.getMagicTableData()
            },
            handlePageChange(){
                this.getMagicTableData()
            },
            handleSearch(){
                this.defaultPaging.current = 1
                this.getMagicTableData()
            }
        },
        created() {
            this.getMagicTableData()
        }
    }
</script>
<style lang="postcss">
    .input-search {
        width: 480px;
        height: 50px;
        display: flex;
        justify-content: space-between;
    }
    .input {
        width: 400px;
    }
</style>
