    var page = 1;
    var i = 3; //ÿ���3��ͼƬ
    //��� ��ť
    function scroll()
	{    //��click�¼�
	   var content = $("div#content"); 
	   var content_list = $("div#content_list");
	   var v_width = content.width();
	   var len = content.find("dl").length;
	   var page_count = Math.ceil(len / i);   //ֻҪ����������������ķ���ȡ��С������
	   if( !content_list.is(":animated") )
	   {    //�жϡ�����չʾ�����Ƿ����ڴ��ڶ���
	     if( page == page_count ){  //�Ѿ������һ��������,�������󣬱�����ת����һ�����档
		    content_list.animate({ left : '0px'}, "slow"); //ͨ���ı�leftֵ����ת����һ������
		    page = 1;
     		}else{
    		content_list.animate({ left : '-='+v_width }, "slow");  //ͨ���ı�leftֵ���ﵽÿ�λ�һ������
    		page++;
    	}
   }
	setInterval(scroll,1000)