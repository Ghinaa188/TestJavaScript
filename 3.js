    const source = [
    {
      id: "1",
      data: {
          first_name: "Rian",
          last_name: "Nugraha"
      },
      school: {
        id: "1",
        data: "PLMK-JKT"
      },
    },
    {
      id: "2",
      full_name: "Ari Santoso",
      school: {
        id: "1",
        short_name: "GRSR",
        data: "JKT"
      },
    },
    {
      id: "3",
      data: {
        first_name: "Rahman",
        last_name: "Sunggara"
    },
    school: {
        id: "1",
        short_name: "GELM",
        data: "JKT"
      },
    },
    {
        id: "4",
        data: {
            first_name: "Rian",
            last_name: "Nugraha"
        },
        school: {
            id: "2",
            data: "PLMK-BDG"
        },
    },
  ]
  for (var i=0; i<=source.length; i++){
    if (source[i]===source[0]){
      console.log("name:" + source[i].data.first_name +" "+source[i].data.last_name + ", school_name: " + source[i].school.data);
    }if(source[i]===source[1]){
      console.log("name: " + source[1].full_name + ", school_name: " + source[1].school.short_name + "-" + source[1].school.data);
    }if(source[i]===source[2]){
      console.log("name:" + source[i].data.first_name + " "+source[i].data.last_name + ", school_name: " + source[i].school.short_name + "-" + source[i].school.data);
    }if(source[i]==source[3]){
      console.log("name:" + source[i].data.first_name +" "+source[i].data.last_name + ", school_name: " + source[i].school.data);
    }
  }
//   const resArray = source.map((el) => {
//     let name = el.data? (el.data.first_name+" "+el.data.last_name): el.full_name;
//     let school_name = el.school.short_name? (el.school.short_name+" "+el.school.data): el.school.data;
//     const result = {
//       name: name,
//       school_name: school_name
//     }
//     return result;
//   })
  
//   console.log(resArray)