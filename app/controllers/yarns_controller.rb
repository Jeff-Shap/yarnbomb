class YarnsController < ApplicationController
  before_action :set_yarn, only: [:show, :edit, :update, :destroy]
  
  
  

  

  # GET /yarns
  # GET /yarns.json
  def index
    @yarns = Yarn.where(user: current_user)
  end

  # GET /yarns/1
  # GET /yarns/1.json
  def show
  end

  # GET /yarns/new
  def new
    @yarn = Yarn.new
    # @skein = Skein.new
    # @skein2 = Skein.new
  end

  # GET /yarns/1/edit
  def edit
  end

  # POST /yarns
  # POST /yarns.json
  

  def create
    
    #clone yarn params (in private) to attrs var
    form_data = params().clone
    attrs2 = yarn_params().clone
    #set user_id in attr = current user
    attrs2[:user_id] = current_user.id
    @yarn = Yarn.new(attrs2)
    
    @new_skein_lengths = form_data
    puts "TEST TEST: #{@new_skein_lengths}"
    @skein_num = form_data[:yarn][:num_of_skeins]

    respond_to do |format|
      if @yarn.save
        yarn_id = @yarn[:id]
        skein_attrs = {:yarn_id => yarn_id, :length => 0}
        
        
          @new_skein_lengths.each do |x|
            @skein = Skein.new(skein_attrs)
            @skein[:length] = x
            puts "SKEIN saved, length: #{x}"
            # i = i + 1
            @skein.save
          end
            
        

          # @skein1 = Skein.new(skein_attrs)
          #   @skein1[:length] = @skein_1_length
          #   puts "SKEIN 1 PRE SAVE: #{@skein1}"
          # @skein1.save
          # @skein2 = Skein.new(skein_attrs)
          #   @skein2[:length] = @skein_2_length
          #   puts "SKEIN 2 PRE SAVE: #{@skein2}"
          # @skein2.save
          # @skein3 = Skein.new(skein_attrs)
          #   @skein3[:length] = @skein_3_length
          #   puts "SKEIN 3 PRE SAVE: #{@skein3}"
          # @skein3.save
          # @skein4 = Skein.new(skein_attrs)
          #   @skein4[:length] = @skein_4_length
          #   puts "SKEIN 4 PRE SAVE: #{@skein4}"
          # @skein4.save
          # @skein5 = Skein.new(skein_attrs)
          #   @skein5[:length] = @skein_5_length
          #   puts "SKEIN 5 PRE SAVE: #{@skein5}"
          # @skein5.save

        format.html { redirect_to url_for :controller => 'skeins', :action => 'new', yarn_id: yarn_id, skeins: @yarn[:num_of_skeins] }
        format.json { render :show, status: :created, location: @yarn }
      else
        format.html { render :new }
        format.json { render json: @yarn.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /yarns/1
  # PATCH/PUT /yarns/1.json
  def update
    respond_to do |format|
      if @yarn.update(yarn_params)
        format.html { redirect_to @yarn, notice: 'Yarn was successfully updated.' }
        format.json { render :show, status: :ok, location: @yarn }
      else
        format.html { render :edit }
        format.json { render json: @yarn.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /yarns/1
  # DELETE /yarns/1.json
  def destroy
    @yarn.destroy
    respond_to do |format|
      format.html { redirect_to yarns_url, notice: 'Yarn was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_yarn
      @yarn = Yarn.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def yarn_params
      params.require(:yarn).permit(:name, :color, :weight, :gauge, :user_id)
      # MAY NEED TO ADD ABOVE - skeins_attributes: [:length]
    end

    def skein_params
      params.require(:skein).permit(:length, :yarn_id)
    end

   
end
