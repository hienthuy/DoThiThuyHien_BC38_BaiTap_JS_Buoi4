/**
 * Bài Tập 1: Sắp xếp 3 số thứ tự tăng dần
 */
/**Sơ đồ 3 khối:
 * Input: 3 số nguyên
 * Process:
 *  1. Khai báo biến a,b,c; Nhận dữ liệu tương tự từ ô Input người dùng nhập vào;
 *  2. Sắp xếp 3 số theo thứ tự tăng dần, Xảy ra 6 Trường hợp:
 *      2.1 Trường hợp (a<b và a<c), nếu b<c đúng => stt: a,b,c
 *                                   nếu b<c sai => stt:a,c,b
 *      2.3 Trường hợp (b<a và b<c), nếu a<c đúng => stt: b,a,c 
 *                                   nếu a<c sai => stt: b,c,a
 *      2.5 Trường hợp (c<a và c<b), nếu a<b đúng => stt: c,a,b 
 *                                   nếu a<b sai => stt: c,b,a   
 *  3. In ra kêt quả sắp xếp. xử lí kết quả hiển thị lên giao diện      
 * Output: Sắp xếp 3 số tăng dần
 */

function sapXep3So(){
    var a=document.getElementById("number1").value*1;
    var b=document.getElementById("number2").value*1;
    var c=document.getElementById("number3").value*1;
    var content="";


    if (a < b && a < c) 
    {
        if (b < c ) 
        {
            content=a+ ","+b +"," + c;
        }else
        {
            content=a+ ","+ c +"," + b;
        }
    }else if (b<a && b<c)
    {
        if (a<c)
        {
            content=b+ ","+ a +"," + c;
        }else
        {
            content= b+ ","+c +"," + a;
        }
    }
    else if (c<a && c<b)
    {
        if (a<b)
        {
            content= c+ ","+a +"," + b;
        }else
        {
            content= c+ ","+b +"," + a;
        }
    }
    document.getElementById("numberArrange").innerHTML=content;
}

/**
 *BÀI 2: Viết chương trình “Chào hỏi” các thành viên trong gia đình
 *  Input:  người sử dụng máy tính
 *  Process: 
 * 1. khai báo biến inputUser bằng cách truy xuất dữ liệu từ ô input người dùng nhập vào
 * 2. content="Xin chào" + inputUser + "!"
 * 3. Hiển thị kết quả lên giao diện: Xin chào người đang sử dụng máy tính tương ứng
 * Output: Hiển thị kết quả lên giao diện
 */

 function sayHelloUser(){
    var inputUser=document.getElementById("inputUser").value;
    content="Xin Chào " + inputUser + "!";
    document.getElementById("hienThiChaoHoi").innerHTML=content;
 }

 /**
  * BÀI 3: Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn
  * Input: 3 số nguyên
  * Process:
  * 1. khai báo biến number_1, number_2, number_3. truy xuất dữ liệu từ input qua id
  * 2. Khai báo biến count1, count2, count3 tương ứng để đếm nếu lần lượt 3 số nguyên trên là số chẵn.
  * Nếu number_1 là số chẵn (number_1 % 2==0)  thì count1=1; Điều kiện sai thì count1==0
  * 3. Khai báo biến đếm số chẵn: count=count1 +count2 +count3;
  * số lẻ odd=3-count;
  * 4. var content="Có " + count +" số chẵn," + odd + " số lẻ"
  * 5. Hiển thị kết quả lên giao diện
  * 6. Kết quả bao nhiêu số chẵn lẻ 
  * 
  */
 function countNumber(){
    var number_1=document.getElementById("number_1").value*1;
    var number_2=document.getElementById("number_2").value*1;
    var number_3=document.getElementById("number_3").value*1;
    var count1=""; 
    var count2="";
    var count3="";

    if (number_1 % 2 ==0)
    {
        count1=1; 
    }else
    {
        count1=0;
    }
    if (number_2 % 2 ==0)
    {
        count2=1;
    }else
    {
        count2=0;
    }
    if (number_3 % 2 ==0)
    {
        count3=1;
    }else
    {
        count3=0;
    }
    var count=count1 + count2 +count3
    var odd=3-count;
    var content="Có " + count +" số chẵn, " + odd + " số lẻ";
    document.getElementById("demSoChanLe").innerHTML=content;
 }

 /**
  * BÀI 4: Nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
  * Input: Số đo 3 cạnh
  * Process:
  * 1. khai báo 3 biến edge1, edge2, edge3
  * 2. Kiểm tra 3 cạnh là của tam giác:
Ba cạnh a, b, c của một tam giác phải thỏa mãn điều kiện là tổng hai cạnh bất kỳ luôn lớn hơn cạnh còn lại. Tức là a+b>c và a+c>b và b+c>a. 
Nếu thỏa mãn điều kiện 3 cạnh của 1 tam giác , ta đi xét tiếp các trường hợp của 1 tam giác
  * 3. 3 cạnh bằng nhau => tam giác đều
  * 4. 2 cạnh bằng nhau là tam giác cân
  * 5. bình phương 1 cạnh bàng tổng bình phương 2 cạnh còn lại à tam giác vuông 
  * 7. Trường hợp còn lại là loại Tam giác khác
  * 8. Trường hợp số đo 3 cạnh không thỏa mãn điều kiện là 1 tam giác => Dữ liệu không hợp lệ
  * 9. In kết quả ra 
  * 
  * Output: Kết luận Loại tam giác 
  */
  function triangleType(){
    var edge1=document.getElementById("canh1").value*1;
    var edge2=document.getElementById("canh2").value*1;
    var edge3=document.getElementById("canh3").value*1;
    content="";
    if ( ((edge1 + edge2) > edge3)  && ((edge2 + edge3) > edge1) && ((edge3 + edge1) > edge2))
    {
        if (( edge1 == edge2) && (edge2==edge3) ) 
        {
            content="Hình tam giác đều";
        }else if ((edge1 == edge2) || (edge2==edge3) || (edge3 == edge1) )
        {
            content="Hình tam giác cân";
        }else if (( Math.pow(edge1,2) == Math.pow(edge2,2) + Math.pow(edge3,2)) ||( Math.pow(edge2,2) == Math.pow(edge1,2) + Math.pow(edge3,2)) || ( Math.pow(edge3,2) == Math.pow(edge2,2) + Math.pow(edge1,2)))
        {
            content="Hình tam giác vuông";
        }else 
        {
            content="Tam giác khác";
        }
    }else {
    content= "Dữ liệu không hợp lệ";
}       
        
      document.getElementById("duDoanTamGiac").innerHTML=content;
    }