export  const formatMoney = (val:any) => {
    val = val.toString().replace(/[.,]/g, "");
    if(isNaN(val * 1)) {
        return ""
    } else {
        return val.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1.");
    }

}