// esconde o menu esquerdo
$(document).ready(function() {

    if ($('li.skuList.item-dimension-Cor span').children('input').length >= 2) {
        $('li.skuList.item-dimension-Cor span').find('input:eq(1)').first().click();
    }

    if ($('.content_banners .sub_banners .box-banner').length > 1) {
        $('.content_banners .sub_banners').cycle({
            prev: '.content_banners a.anterior',
            next: '.content_banners a.proximo',
            delay: 5000
        });
    } else {
        $('.content_banners a.anterior,.content_banners a.proximo').hide();
    }
    $('.prateleira ul li .bestprice').each(function() {
        var RawElementPreco = $(this);
        var htmlPreco = RawElementPreco.html();
        var precoNumber = parseFloat(htmlPreco.replace('R$ ', '').replace(',', '.')).toFixed(2);
        var precoBoleto = precoNumber * 0.9;
        var precoBoletoFormatado = precoBoleto.toFixed(2).toString().replace(',', '*').replace('.', ',').replace('*', '.');
        var precoBoletoHtml = "<br/><span class='precoboleto'> Ou R$ " + precoBoletoFormatado + " No boleto</span>";
        console.log(RawElementPreco.parent().find('.precoboleto'));
        if (!RawElementPreco.parent().find('.precoboleto').length) {
            // RawElementPreco.parent().append(precoBoletoHtml);
        } else {
            //RawElementPreco.parent().find('.precoboleto').html(precoBoletoHtml);
        }
    });
    // filtro de tamanhos
    $('.search-single-navigator ul.Tamanho li a').each(function() {
        $(this).html($(this).attr('title'));
    });
    $('.search-single-navigator ul.Marca li a').each(function() {
        $(this).addClass($(this).attr('title').replace(' ', '-'));
    });

    //seletor de cores dos produtos
    var _input0 = $('span.group_0 input[type="radio"]');
    $(_input0).each(function() {
        corx = $(this).attr('value');
        var skudata = skuJson.skus.filter(function(e) {
            return e.dimensions.Cor == corx;
        })[0];
        url = skudata.image;
        $(this).next().css('background', 'url(' + url + ') no-repeat #fff center');

    });
    // slider departamentos
    $('.rodar ul li.helperComplement').remove();

    $('.rodar.prateleira').each(function(z) {
        var $this = $(this);
        var largura_original = $this.width();
        var wii = ((largura_original - 122) / $this.find('li').eq(0).width());
        if ($this.children('ul').children('li').length > wii) {
            $this.wrap('<div class="wrapper_prateleira"></div>');
            $this.css({ 'width': largura_original - 70, 'margin': '0' });
            $this.parent().prepend('<a class="vitbtprev" href="#" id="btprev_' + z + '"></a>');
            $this.parent().append('<a class="vitbtnext" href="#"  id="btnext_' + z + '"></a>');
            $this.parent().css({ 'width': largura_original, 'margin': '0 auto', padding: '0' });
            $this.addClass('scroll');
            $this.jCarouselLite({
                btnNext: "#btnext_" + z,
                btnPrev: "#btprev_" + z,
                visible: wii,
                start: 0,
                scroll: 2
            });
        }



    });

    // $(".menu-mobile ul li a").click(function() {
    //     $(".menu-mobile .submenu.homens").attr('style', 'visibility: visible ', );
    //     // console.log('clickou!');
    // });



    $(".menu-mobile ul .over-homens a").click(function() {
        $(".menu-mobile .submenu.homens").attr('style', 'visibility: visible ', );
        $(".overlayMobile").attr('style', 'display: block ', );
    });


    $(".menu-mobile ul .over-mulheres a").click(function() {
        $(".menu-mobile .submenu.mulheres").attr('style', 'visibility: visible ', );
        $(".overlayMobile").attr('style', 'display: block ', );
    });
    $(".menu-mobile ul .over-criancas a").click(function() {
        $(".menu-mobile .submenu.criancas").attr('style', 'visibility: visible ', );
        $(".overlayMobile").attr('style', 'display: block ', );
    });

    $(".close-Btn").click(function() {
        $(".menu-mobile .submenu.homens").attr('style', 'visibility: hidden ', );
        $(".menu-mobile .submenu.criancas").attr('style', 'visibility: hidden ', );
        $(".menu-mobile .submenu.mulheres").attr('style', 'visibility: hidden ', );
        $(".overlayMobile").attr('style', 'display: none ', );
    });

    $(".overlayMobile").click(function() {
        $(".menu-mobile .submenu.homens").attr('style', 'visibility: hidden ', );
        $(".menu-mobile .submenu.criancas").attr('style', 'visibility: hidden ', );
        $(".menu-mobile .submenu.mulheres").attr('style', 'visibility: hidden ', );
        $(".overlayMobile").attr('style', 'display: none ', );
    });




    // SELECTOR BAR INN

    
    


    $('.box-comprar #skuselector ul.Cor label').on('click',function(a,b,c){  
       $('.maisDoTamanho').remove();
    });
    
    $('.box-comprar #skuselector ul.Tamanho label').on('click',function(a,b,c){  
    
        if($(a.srcElement).hasClass('item_unavailable') && !["U","UNICO","ÚNICO"].includes(a.srcElement.innerHTML)){ 
            
              dataLayer.push({
                'event': 'eventTracking',
                'category': 'unavailableSizey',
                'action': 'unavailableClick',
                'label': 'unavailable '+a.srcElement.innerHTML
              });
            $('.maisDoTamanho').remove();
           $("<p class='maisDoTamanho' style='margin:25px 90px 30px 0; text-align:left'>Tamanho não disponível, <a style='color:red' href='/"+a.srcElement.innerHTML+"?PS=32&map=specificationFilter_40&O=OrderByTopSaleDESC'>clique aqui para ver mais produtos no tamanho "+a.srcElement.innerHTML+"</a></p>").insertAfter('.topic.Tamanho');
       } else {
       $('.maisDoTamanho').remove();
       }
       });
});