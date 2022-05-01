const tableList = (app) => {
    app.get('/api/magic/table', (req, res) => {
        const list = new Array(40).fill(null).map((item,index) =>{
          let target = {
            id: 1,
            ip: '127.0.0.1',
            source: '微信',
            status: '正常',
            name: '测试数据' + '-' + index,
            create_time: '2018-05-25 15:02:24',
            children: [],
          }
          return target
        })
    
        const query = req.query
        const { page_size = 10, page = 1, value = ''} =query
        const filterData = list.filter(item => item.name.includes(value))
        const result = filterData.slice((page -1)*page_size, page_size*page)
    
        res.json({
          code: 0,
          message: '',
          data:{
            list: result,
            total: filterData.length,
            query
          },
        })
    });
};

module.exports = tableList;
