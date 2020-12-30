<?php
/**
 * Created by 如花商城-多商户系统
 * User: 黔域科技
 * QQ群: 728615087
 */

namespace  ruhua\exceptions;


class ShopsException extends BaseException
{
    public $code = 400;
    public $msg = '商家端错误';
    public $errorCode = 1000;

    public function __construct($params = []){
        if( !is_array($params)){
            return ;
        }
        if(array_key_exists('code',$params)){
            $this->code = $params['code'];
        }
        if(array_key_exists('msg',$params)){
            $this->msg = $params['msg'];
            $this->message = $params['msg'];
        }
        if(array_key_exists('errorCode',$params)){
            $this->errorCode = $params['errorCode'];
        }
    }
}