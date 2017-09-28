<template>
    <div class='finish_room'>
        <div class='finish_room2'>
            <div v-for='(item ,index ) in imgs' class='room_img'>
                <img :src="item" class="imgItem cur">
                <span class="delete cur" @click='delete_img(index)'><img src="./../assets/images/delete.png"></span>
                <span class="flagStatus">上传成功</span>
            </div>
            <div class="upload_file">
                <i class="el-icon-plus avatar-uploader-icon"></i>
                <input v-if="myMultiple" type="file" accept=".png,.jpg,.jpeg,.bmp" @change='add_img'>
                <input v-else="myMultiple" type="file" multiple="multiple" accept=".png,.jpg,.jpeg,.bmp"
                       @change='add_img'>
            </div>
        </div>
        <!-- <div>
             <img src="./../assets/images/delete.png" style="max-height: 80%" alt=""/>
         </div>-->
    </div>

</template>

<script>
  import utilService from './../utils/util'

  export default {
    data: function () {
      return {
        imgs: [],
        uploadFlag: {
          'UN_SEL': '0',			// 未选中文件
          'UN_UPLOAD': '1',		// 未上传文件
          'UPLOAD_SUCC': '2',		// 已成功上传文件
          'UPLOAD_FAILED': '3',	// 上传失败
          'UPLOADING': '4'	// 上传中
        }
      }
    },
    props: {
      maxSize: {
        default: 5120,
        type: Number
      },
      readonly: {
        type: Boolean,
        default: false
      },
      myMultiple: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      // 上传标志
      _getStatusName (flag) {
        let _this = this
        switch (utilService.isNotEmptyStr(flag)) {
          case _this.uploadFlag.UN_SEL :
            return '未选择'
          case _this.uploadFlag.UN_UPLOAD :
            return '未上传'
          case _this.uploadFlag.UPLOAD_SUCC :
            return '上传成功'
          case _this.uploadFlag.UPLOAD_FAILED :
            return '上传失败'
          case _this.uploadFlag.UPLOADING :
            return '上传中…'
          default :
            return '未知状态'
        }
      },
      delete_img (item) {
        this.imgs.splice(item, 1)
      },
      _newFileItem () {
        let _this = this
        return {
          'id': utilService.getUUID(),
          'basePath': '',
          'fileUrl': '',
          'flag': _this.uploadFlag.UN_SEL,
          'file': '',
          'showDelIcon': false,
          'fileName': '',
          'total': 0,
          'loaded': 0,
          'getUrl': function () {
            return this.basePath + this.fileUrl
          },
          'isUploading': function () {
            return this.flag === _this.uploadFlag.UPLOADING
          }
        }
      },
      // 获取上文件对象中选择一个空位置
      _getFreeFileItem (fileData) {
        // 单选图片，可直接替换文件
        if (fileData.maxFile === 1) {
          if (fileData.fileArray.length === 0) {
            fileData.fileArray.push(this.newFileItem())
          } else if (fileData.fileArray[0] === null) {
            fileData.fileArray = [this.newFileItem()]
          }
          return fileData.fileArray[0]
        }
        // 在当前图片中查找未使用的图片对象
        for (let i = 0; i < fileData.fileArray.length && i < fileData.maxFile; i++) {
          if (fileData.fileArray[i].flag === this.uploadFlag.UN_SEL) {
            // 未选择图片
            return fileData.fileArray[i]
          }
        }
        // 未找到空闲，并且还可再上传文件
        if (fileData.fileArray.length < fileData.maxFile) {
          fileData.fileArray.push(this.newFileItem())
          return fileData.fileArray[fileData.fileArray.length - 1]
        }
        // 未找到空闲的文件对象
        return null
      },
      add_img (event) {
        for (let i = 0; i < event.target.files.length; i++) {
          let file = event.target.files[i]
          console.log(event)
          let freeItem = this._newFileItem()
          console.log(this._newFileItem())
          // 文件
          freeItem.file = file
          freeItem.fileName = file.name
          freeItem.total = file.size
          let reader = new FileReader()
          freeItem.flag = this.uploadFlag.UN_UPLOAD
          reader.readAsDataURL(file)
        }
      }
    }
  }
</script>
<style scoped type="text/less" lang="less">
    .finish_room2 {
        width: auto;
        height: 120px;
        .room_img {
            height: 120px;
            float: left;
            position: relative;
            margin-right: 10px;
            .imgItem {
                width: 120px;
                height: 120px;
                float: left;

            }
            .delete {
                position: absolute;
                display: inline-block;
                width: 15px;
                height: 15px;
                right: 5px;
                top: 5px;
                img {
                    height: 15px;
                    right: 15px;
                    display: block;
                }
            }
            .flagStatus {
                position: absolute;
                bottom: 10px;
                background: #000000;
                opacity: 0.5;
                color: #ff7e1d;
                display: block;
                width: 120px;
                height: 20px;
                line-height: 20px;
                text-align: center;
            }
        }
        .upload_file {
            float: left;
            position: relative;
            i {
                display: block;
                width: 120px;
                height: 120px;
                border: 1px solid #cccccc;
                text-align: center;
                line-height: 120px;
            }
            input {
                position: absolute;
                left: 0;
                top: 0;
                width: 120px;
                height: 120px;
                opacity: 0;
                cursor: pointer;
            }
        }
    }

</style>